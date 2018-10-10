const fs = require('fs');
const path = require('path');
const Config = require('webpack-chain');
const express = require('express');
const chalk = require('chalk');

const VERSION = require('void-ui/package.json').version;

const options = {
  baseUrl: '/void-ui/',
  assetsDir: 'static',
  filenameHashing: true,

  css: {
    loaderOptions: {
      postcss: {
        // https://github.com/vuejs/vue-cli/issues/2572
        path: __dirname,
      },
    },
  },

  /**
   * https://github.com/neutrinojs/webpack-chain
   * @param {Config} config
   */
  chainWebpack: config => {
    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);
    const getAssetPath = require('@vue/cli-service/lib/util/getAssetPath');

    const isProd = process.env.NODE_ENV === 'production';
    const isLegacyBundle =
      process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;

    const hashDigest = 'hex';
    const hashDigestLength = 128;
    const hashFunction = 'sha512';

    const inlineLimit = 32;

    // base --------------------------------------------------------

    config.resolve.symlinks(false);
    config.resolve.extensions
      .clear()
      .merge(['.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '.md']);

    // https://github.com/vuejs/vue-cli/issues/2599
    config.resolveLoader.modules.add(
      `${path.dirname(require.resolve('@vue/cli-plugin-babel'))}/node_modules`,
    );

    config.resolve.alias
      .delete('@')
      .set('@src', resolve('src'))
      .set('void-ui$', 'void-ui/src/index.ts');

    config.entryPoints
      .delete('app')
      .end()
      .entry('docs')
      .add(resolve('src/entry-client.ts'));

    // js --------------------------------------------------------

    if (isProd) {
      const filename = getAssetPath(
        options,
        `js/[name]${isLegacyBundle ? '-legacy' : ''}${
          options.filenameHashing ? '.[contenthash]' : ''
        }.js`,
      );

      config.output
        .filename(filename)
        .chunkFilename(filename)
        .hashDigest(hashDigest)
        .hashDigestLength(hashDigestLength)
        .hashFunction(hashFunction);
    }

    // css

    if (isProd) {
      const filename = getAssetPath(
        options,
        `css/[name]${options.filenameHashing ? '.[contenthash]' : ''}.css`,
      );

      config.plugin('extract-css').tap(([opt]) => [
        {
          ...opt,
          filename: filename,
          chunkFilename: filename,
          hashDigest,
          hashDigestLength,
          hashFunction,
        },
      ]);
    }

    // static assets --------------------------------------------------------

    const genFileLoaderOptions = dir => ({
      name: getAssetPath(
        options,
        `${dir}/[name]${
          options.filenameHashing
            ? `.[${hashFunction}:hash:${hashDigest}:${hashDigestLength}]`
            : ''
        }.[ext]`,
      ),
    });

    [['images', 'img'], ['media', 'media'], ['fonts', 'fonts']].forEach(([rule, dir]) => {
      config.module
        .rule(rule)
        .use('url-loader')
        .loader('url-loader')
        .tap(opt => ({
          ...opt,
          ...{
            limit: inlineLimit,
            fallback: {
              loader: 'file-loader',
              options: genFileLoaderOptions(dir),
            },
          },
        }));
    });

    config.module
      .rule('svg')
      .use('file-loader')
      .loader('file-loader')
      .tap(opt => ({
        ...opt,
        ...genFileLoaderOptions('img'),
      }));

    fs.writeFile(
      resolve('temp.webpack.config.js'),
      `module.exports = ${Config.toString(config.toConfig())}`,
      writeFileError => writeFileError && console.error(writeFileError),
    );
  },

  devServer: {
    host: '0.0.0.0',
    port: 8102,
    open: true,
    /**
     * @param {express.Application} app
     */
    before: app => {
      app.use(
        `${options.baseUrl}examples/${VERSION}`,
        express.static('./src/examples', {
          setHeaders: response => {
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
          },
        }),
      );
    },
  },
};

module.exports = options;
