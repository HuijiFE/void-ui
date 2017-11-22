'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.config');

const isProduction = process.env.NODE_ENV === 'production';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath;
const urlLoaderLimit = config.common.urlLoaderLimit;

const alias = {
  src: resolve('src'),
};
if (config.build.productionVueRuntimeOnly) {
  alias.vue$ = 'vue/dist/vue.esm.js';
}

module.exports = {
  entry: Object.assign({}, config.solution.commons, config.solution.entries),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath,
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.scss'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
          },
        },
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.ts$/,
        use: 'tslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: vueLoaderConfig,
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        include: [resolve('src')],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: urlLoaderLimit,
            name: utils.assetsPath('img/[name].[hash:8].[ext]'),
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: urlLoaderLimit,
            name: utils.assetsPath('media/[name].[hash:8].[ext]'),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: urlLoaderLimit,
            name: utils.assetsPath('fonts/[name].[hash:8].[ext]'),
          },
        },
      },
    ],
  },
};
