'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.config.base');

baseWebpackConfig.resolve.alias.vue$ = 'vue/dist/vue.esm.js';

const env =
  process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : require('../config/prod.env');

// #region minify_and_hash

// minimize js, see also '/config/index.js'
const jsMinify = config.build.productionJs.minify;

const uglifyJsPlugin = jsMinify
  ? [
      // UglifyJs do not support ES6+
      // you can also use babel-minify for better treeshaking
      // https://github.com/babel/minify
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false,
        },
        sourceMap: true,
        parallel: true,
      }),
    ]
  : [];

// add hash in output js file name, see also '/config/index.js'
const jsOutput = config.build.productionJs.useHash
  ? {
      path: config.build.assetsRoot,
      filename: utils.assetsPath('js/[name].[chunkhash].js'),
      chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
      hashDigest: config.build.hashDigest,
      hashDigestLength: config.build.hashDigestLength,
      hashFunction: config.build.hashFunction,
    }
  : {
      path: config.build.assetsRoot,
      filename: utils.assetsPath('js/[name].js'),
      chunkFilename: utils.assetsPath('js/[id].js'),
    };

const cssMinify = config.build.productionCss.minify;

const optimizeCSSPlugin = cssMinify
  ? [
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSPlugin({
        cssProcessorOptions: config.build.productionSourceMap
          ? {
              safe: true,
              discardComments: {
                removeAll: true,
              },
              map: { inline: false },
            }
          : {
              safe: true,
              discardComments: {
                removeAll: true,
              },
            },
      }),
    ]
  : [];

// add hash in output css file, see also '/config/index.js'
const cssOutput = config.build.productionCss.useHash
  ? utils.assetsPath(
      `css/[name].[${config.build.hashFunction}:contenthash:${config.build.hashDigest}:${
        config.build.hashDigestLength
      }].css`,
    )
  : utils.assetsPath('css/[name].css');

// minify html, see also '/config/index.js'
const htmlMinify = config.build.productionHtml.minify
  ? {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  : false;

// generate dist index.html with correct asset hash for caching.
// you can customize output by editing /index.html
// see https://github.com/ampedandwired/html-webpack-plugin
const htmlWebpackPlugins =
  process.env.NODE_ENV === 'testing'
    ? [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: config.test.htmlTemplate,
          inject: true,
          minify: htmlMinify,
          // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          chunksSortMode: 'dependency',
        }),
      ]
    : config.solution.pages.map(page => {
        let pluginConfig = {
          chunks: [
            'manifest',
            'vendor',
            ...Object.keys(config.solution.commons),
            page.entry,
          ],
          template: page.template,
          filename: path.join(config.build.assetsRoot, page.output, 'index.html'),
          inject: true,
          minify: htmlMinify,
          // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          chunksSortMode: 'dependency',
        };
        return new HtmlWebpackPlugin(pluginConfig);
      });

// #endregion minify_and_hash

const webpackConfig = merge(baseWebpackConfig, {
  entry: Object.assign({}, config.solution.commons, config.solution.entries),
  module: {
    rules: utils.styleLoaders({
      minimize: cssMinify,
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true,
    }),
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: jsOutput,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    ...uglifyJsPlugin,
    // extract css into its own file
    new ExtractTextPlugin({
      filename: cssOutput,
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      allChunks: false,
    }),
    ...optimizeCSSPlugin,
    ...htmlWebpackPlugins,
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      names: config.solution.entries,
      async: 'vendor-async',
      children: true,
      minChunks: 3,
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
  ],
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
