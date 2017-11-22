'use strict';
const path = require('path');

const solution = require('./solution');

module.exports = {
  common: {
    // File size limit of url-loader for inline data url
    urlLoaderLimit: 8192,
  },
  solution,
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionVueRuntimeOnly: true,
    productionJs: {
      minify: true,
      useHash: true,
    },
    productionCss: {
      minify: true,
      useHash: true,
    },
    productionHtml: {
      minify: false,
    },
    hashDigest: 'hex',
    hashDigestLength: 64,
    hashFunction: 'sha256',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 9421,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
  test: {
    htmlTemplate: 'src/main.html',
  },
};
