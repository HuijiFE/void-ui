const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const Config = require('webpack-chain');

const hashFunction = 'sha512';
const hashDigest = 'hex';
const hashDigestLength = 128;

/**
 * base64 inline encoding file size limit
 */
const limit = 4096;

const baseUrlMap = {
  docs: '/void-ui/static/',
  lib: '/',
};

const destMap = {
  docs: 'www/static',
  lib: 'dist',
};

const SOLUTION = process.env.BUILD_SOLUTION;

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? baseUrlMap[SOLUTION] : '/',

  outputDir: destMap[SOLUTION],
  indexPath: '../index.html',

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
    const resolve = _path => path.resolve(context, _path);

    // customize alias
    const aliasMap = config.resolve.alias.delete('@');
    Object.entries({
      '@docs': 'docs',
      '@void/ui/lib': 'lib',
    }).forEach(([alias, dir]) => aliasMap.set(alias, resolve(dir)));

    if (SOLUTION === 'docs' && process.env.NODE_ENV === 'production') {
      // Customize js output file name with hash.
      const jsFilename =
        process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
          ? 'js/[name]-legacy.[chunkhash].js'
          : 'js/[name].[chunkhash].js';
      config.output
        .filename(jsFilename)
        .chunkFilename(jsFilename)
        .hashFunction(hashFunction)
        .hashDigest(hashDigest)
        .hashDigestLength(hashDigestLength);

      // Customize css output file name with hash.
      const cssFilename = 'css/[name].[contenthash].css';
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
          .tap(opt => ({
            ...opt,
            ...{
              limit,
              name: `${dir}/[name].[${hashFunction}:hash:${hashDigest}:${hashDigestLength}].[ext]`,
            },
          })),
      );
    }
  },

  parallel: require('os').cpus().length > 1,
};
