'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.config.base');

const env =
  process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : require('../config/prod.env');

// #region minify_and_hash

// UglifyJs do not support ES6+
// you can also use babel-minify for better treeshaking
// https://github.com/babel/minify
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true,
  compress: {
    warnings: false,
  },
  sourceMap: true,
  parallel: true,
});

const jsOutput = {
  path: path.resolve(__dirname, '../dist'),
  filename: '[name].js',
  library: 'VoidUI',
  libraryTarget: 'umd',
};

// Compress extracted CSS. We are using this plugin so that possible
// duplicated CSS from different components can be deduped.
const optimizeCSSPlugin = new OptimizeCSSPlugin({
  assetNameRegExp: /\.min\.css$/,
  cssProcessorOptions: {
    safe: true,
    discardComments: {
      removeAll: true,
    },
    map: { inline: false },
  },
});

const cssOutput = '[name].css';

// #endregion minify_and_hash

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'void-ui.common': './src/index.ts',
    'void-ui.min': './src/index.ts',
    'void-ui.style.common': './src/index.scss',
    'void-ui.style.min': './src/index.scss',
  },
  module: {
    rules: utils.styleLoaders({
      minimize: false,
      sourceMap: true,
      extract: true,
      usePostCSS: true,
    }),
  },
  devtool: config.build.devtool,
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
      },
    },
  ],
  output: jsOutput,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
    }),

    uglifyJsPlugin,

    // extract css into its own file
    new ExtractTextPlugin({
      filename: cssOutput,
    }),
    // optimizeCSSPlugin,

    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),

    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.min\\.(' + config.build.productionGzipExtensions.join('|') + ')$',
      ),
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
