const fs = require('fs');
const path = require('path');
const chalk = require('chalk').default;
const webpack = require('webpack');
const Config = require('webpack-chain');
const express = require('express');

const hashFunction = 'sha512';
const hashDigest = 'hex';
const hashDigestLength = 128;

/**
 * base64 inline encoding file size limit
 */
const limit = 4096;

/**
 * @type {'lib' | 'scss' | 'docs'}
 */
const VUE_ENTRY = process.env.VUE_ENTRY;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? VUE_ENTRY === 'docs'
      ? '/void-ui/'
      : '/'
    : '/';
const outputDir = VUE_ENTRY === 'docs' ? 'www' : 'dist';
const assetsDir = 'static';

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

    // Customize alias
    const aliasMap = config.resolve.alias.delete('@');
    Object.entries({
      '@docs': 'docs',
      '@void/ui/lib': 'lib',
    }).forEach(([alias, dir]) => aliasMap.set(alias, resolve(dir)));

    // Resolve docs build
    if (VUE_ENTRY === 'docs' && process.env.NODE_ENV === 'production') {
      const isLegacyBundle =
        process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;

      // Revise entry
      config.entryPoints
        .delete('app')
        .end()
        .entry('docs')
        .clear()
        .add(resolve('docs/main.ts'));

      // Customize js output file name with hash.
      const jsFilename = isLegacyBundle
        ? `${assetsDir}/js/[name]-legacy.[chunkhash].js`
        : `${assetsDir}/js/[name].[chunkhash].js`;
      config.output
        .filename(jsFilename)
        .chunkFilename(jsFilename)
        .hashFunction(hashFunction)
        .hashDigest(hashDigest)
        .hashDigestLength(hashDigestLength);

      // Customize css output file name with hash.
      const cssFilename = `${assetsDir}/css/[name].[contenthash].css`;
      config.plugin('extract-css').tap(args => [
        {
          filename: cssFilename,
          chunkFilename: cssFilename,
          hashFunction,
          hashDigest,
          hashDigestLength,
        },
      ]);

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
            opt.name = `${assetsDir}/${dir}/[name].[${hashFunction}:hash:${hashDigest}:${hashDigestLength}].[ext]`;
            if (opt.fallback && opt.fallback.options && opt.fallback.options.name) {
              console.log(chalk.cyanBright(opt.fallback.options.name));
              opt.fallback.options.name = opt.name;
            }

            return opt;
          }),
      );

      // Copy examples source code
      if (!isLegacyBundle) {
        config.plugin('copy').tap(args => [
          [
            ...args[0],
            {
              from: resolve('docs/examples'),
              to: resolve(outputDir, 'examples', process.env.VUE_APP_VOID_UI_VERSION),
              toType: 'dir',
              ignore: ['.DS_Store'],
            },
          ],
        ]);
      }

      // fs.writeFile(
      //   isLegacyBundle ? 'webpack.build.docs-legacy.js' : 'webpack.build.docs.js',
      //   `module.exports = ${Config.toString(config.toConfig())}`,
      //   err => err && console.log(err),
      // );
    }
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
