const path = require('path');
const package = require('./package.json');
const Config = require('webpack-chain');
const Options = require('@vue/cli-service/lib/options').defaults();
const express = require('express');

const { version } = package;
const prefix = `void-ui.${version}`;

const HASH_FUNCTION = 'sha256';
const HASH_DIGEST = 'hex';
const HASH_DIGEST_LENGTH = 64;

const solutionMap = {
  docs: 'docs',
  void: 'void',
};
const destMap = {
  docs: 'www',
  void: 'dist',
};

const SOLUTION = process.env.VUE_SOLUTION;

/**
 * @var {typeof Options}
 */
module.exports = {
  baseUrl: '/void-ui/',

  outputDir: destMap[SOLUTION],
  assetsDir: 'statics',
  // pages: {
  //   app: {
  //     entry: 'docs/main.ts',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //   },
  //   demos: {
  //     entry: 'docs/main.ts',
  //     template: 'public/index.html',
  //     filename: 'demos/index.html',
  //   },
  // },

  lintOnSave: true,

  runtimeCompiler: true,
  transpileDependencies: [],

  productionSourceMap: true,

  configureWebpack: () => {},
  /**
   * @param {Config} config
   */
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = _path => path.resolve(context, _path);

    // customize alias
    config.resolve.alias
      .delete('@')
      .set('@void', resolve('src'))
      .set('@docs', resolve('docs'));

    // correct the entry
    config
      .entry('app')
      .clear()
      .add(resolve('docs/main.ts'));

    if (process.env.NODE_ENV === 'production') {
      // Customize js output file name with hash.
      config.output
        .filename(`js/${prefix}.[name].[chunkhash].js`)
        .chunkFilename(`js/${prefix}.[name].[chunkhash].js`)
        .hashFunction(HASH_FUNCTION)
        .hashDigest(HASH_DIGEST)
        .hashDigestLength(HASH_DIGEST_LENGTH);
    }
  },

  css: {
    modules: false,
    extract: {
      // Customize css output file name with hash.
      filename: `css/${prefix}.[name].[contenthash].css`,
      chunkFilename: `css/${prefix}.[name].[id].[contenthash].css`,
    },
    sourceMap: false,
    loaderOptions: {},
  },

  // configure webpack-dev-server behavior
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    /**
     * @arg {express.Express} app
     */
    before: app => {
      const resolve = _path => path.join(__dirname, _path);

      /**
       * @arg {express.Response} res
       */
      const setHeaders = res => {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      };

      app.use('/examples', express.static(resolve('docs/examples'), { setHeaders }));
    },
  },

  parallel: require('os').cpus().length > 1,

  pwa: {},

  pluginOptions: {},
};
