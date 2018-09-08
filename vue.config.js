const fs = require('fs');
const path = require('path');
const chalk = require('chalk').default;
const webpack = require('webpack');
const Config = require('webpack-chain');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');
const express = require('express');

// ======== Environment Variables ========

/**
 * @param {string} name
 * @param {string} env
 * @param {string[]} available
 */
function validate(name, env, available) {
  if (!available.includes(env)) {
    throw new Error(`Invalid Environment Variables ${name}: ${env}`);
  }
}

/**
 * @type {'development' | 'production'}
 */
const NODE_ENV = process.env.NODE_ENV;
validate('NODE_ENV', NODE_ENV, ['development', 'production']);

/**
 * @type {'client' | 'server'}
 */
const VUE_ENV = process.env.VUE_ENV;
validate('VUE_ENV', VUE_ENV, ['client', 'server']);

/**
 * @type {'docs' | 'lib' | 'scss'}
 */
const VUE_ENTRY = process.env.VUE_ENTRY;
validate('VUE_ENTRY', VUE_ENTRY, ['docs', 'lib', 'scss']);

// ======== Configuration ========

const configDocs = {
  baseUrl: '/void-ui/',
  outputDir: `www/${VUE_ENV}`,
  assetsDir: 'static',
};

const { baseUrl, outputDir, assetsDir } = VUE_ENTRY === 'docs' ? configDocs : {};

module.exports = {
  baseUrl,
  outputDir,
  assetsDir,

  lintOnSave: true,

  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: true,

  /**
   * @returns {webpack.Configuration}
   */
  configureWebpack: () => ({}),

  /**
   * @param {Config} config
   */
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);

    // chainMarkdown(config);
    docsChainWebpack(config);

    if (VUE_ENTRY === 'docs' && NODE_ENV === 'production') {
      const isLegacyBundle =
        process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;
      output(
        config,
        isLegacyBundle ? 'temp.webpack-legacy-config.js' : 'temp.webpack.config.js',
      );
    }
  },

  pluginOptions: {
    markdownLoaderOptions: {
      useAnchor: true,
    },
  },

  parallel: require('os').cpus().length > 1,

  devServer: {
    host: '0.0.0.0',
    port: 8102,
    open: true,
    /**
     * @param {express.Application} app
     */
    before(app) {
      app.use(
        `${baseUrl}examples/${process.env.VUE_APP_VOID_UI_VERSION}`,
        express.static('./docs/examples', {
          setHeaders: response => {
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
          },
        }),
      );
    },
  },
};

// ======== Docs ========

// base64 inline encoding file size limit
const limit = 4096;

// hash in filename
const hashFunction = 'sha512';
const hashDigest = 'hex';
const hashDigestLength = 128;

/**
 * Resolve webpack config by webpack-chain for docs
 * @param {Config} config
 */
function docsChainWebpack(config) {
  if (VUE_ENTRY !== 'docs') {
    return;
  }

  const isLegacyBundle =
    process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;

  const context = config.store.get('context');
  const resolve = (...paths) => path.resolve(context, ...paths);

  // Revise entry
  config.entryPoints
    .delete('app')
    .end()
    .entry('docs')
    .add(resolve(`docs/entry-${VUE_ENV}.ts`));

  // Customize alias
  config.resolve.alias
    .delete('@')
    .set('@docs', resolve('docs'))
    .set('void-ui$', resolve('lib/void-ui.ts'));

  config.resolve.alias.set('create-api', `./create-api-${VUE_ENV}.js`);

  config
    .plugin('vue-ssr')
    .use(VUE_ENV === 'server' ? VueSSRServerPlugin : VueSSRClientPlugin);

  config.externals(
    VUE_ENV === 'server' ? nodeExternals({ whitelist: /\.css$/ }) : undefined,
  );

  config.target(VUE_ENV === 'server' ? 'node' : 'web');

  if (VUE_ENV === 'server') {
    config.output.libraryTarget('commonjs2');
  }

  // Customize assets output file name with hash.
  [
    ['images', 'url-loader', 'url-loader', limit, 'img'],
    ['svg', 'file-loader', 'file-loader', undefined, 'img'],
    ['media', 'url-loader', 'url-loader', limit, 'media'],
    ['fonts', 'url-loader', 'url-loader', limit, 'fonts'],
  ].forEach(([rule, use, loader, limit, dir]) =>
    config.module
      .rule(rule)
      .use(use)
      .loader(loader)
      .tap(opt => {
        opt.limit = limit;
        opt.name = `${
          configDocs.assetsDir
        }/${dir}/[name].[${hashFunction}:hash:${hashDigest}:${hashDigestLength}].[ext]`;
        if (opt.fallback && opt.fallback.options && opt.fallback.options.name) {
          opt.fallback.options.name = opt.name;
        }

        return opt;
      }),
  );

  if (NODE_ENV !== 'production') {
    return;
  }

  // Customize js output file name with hash.
  const jsFilename = isLegacyBundle
    ? `${configDocs.assetsDir}/js/[name]-legacy.[chunkhash].js`
    : `${configDocs.assetsDir}/js/[name].[chunkhash].js`;
  config.output
    .filename(jsFilename)
    .chunkFilename(jsFilename)
    .hashFunction(hashFunction)
    .hashDigest(hashDigest)
    .hashDigestLength(hashDigestLength);

  // Customize css output file name with hash.
  const cssFilename = `${configDocs.assetsDir}/css/[name].[contenthash].css`;
  config.plugin('extract-css').tap(args => [
    {
      filename: cssFilename,
      chunkFilename: cssFilename,
      hashFunction,
      hashDigest,
      hashDigestLength,
    },
  ]);

  if (VUE_ENV === 'server') {
    config.optimization.delete('minimizer').delete('splitChunks');
  } else {
    // Split chunks
    // Chunk splitting
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/](?!vue)/,
          priority: -10,
          chunks: 'initial',
        },
        common_vue: {
          name: `chunk-vue`,
          test: /[\\/]node_modules[\\/]vue/,
          priority: -11,
          chunks: 'initial',
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    });
  }

  // Copy examples source code
  if (VUE_ENV === 'client' && !isLegacyBundle) {
    config.plugin('copy').tap(args => [
      [
        ...args[0],
        {
          from: resolve('docs/examples'),
          to: resolve(
            configDocs.outputDir,
            'examples',
            process.env.VUE_APP_VOID_UI_VERSION,
          ),
          toType: 'dir',
          ignore: ['.DS_Store'],
        },
      ],
    ]);
  }
}

// ======== Output config to file ========

/**
 * @param {Config} config
 * @param {string} filename
 */
function output(config, filename) {
  fs.writeFile(
    filename,
    `module.exports = ${Config.toString(config.toConfig())}`,
    error => error && console.log(error),
  );
}
