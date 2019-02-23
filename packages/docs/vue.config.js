const express = require('express');
const Config = require('webpack-chain');
const { genPathResolve } = require('@huiji/shared-utils');
const { chainWebpackHash, chainWebpackSSR } = require('@huiji/vue-cli-utils');

const resolvePath = genPathResolve(__dirname);

const isProd = process.env.NODE_ENV === 'production';
const examplesDir = resolvePath('src', 'examples');

const options = {
  publicPath: isProd ? '/void-ui/' : '/',
  outputDir: 'dist',

  /**
   * https://github.com/neutrinojs/webpack-chain
   * @param {Config} config
   */
  chainWebpack: config => {
    config.resolve.symlinks(true);
    config.resolve.alias.delete('@').set('@src', resolvePath('src'));

    config.entryPoints
      .delete('app')
      .end()
      .entry('docs')
      .add(resolvePath('src/entry-client.ts'));

    config.resolve.extensions
      .clear()
      .merge(['.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '.md']);

    if (isProd) {
      chainWebpackHash(options)(config);
      config.plugin('copy').tap(opts => {
        opts[0].push({
          from: examplesDir,
          to: 'examples',
          toType: 'dir',
        });

        return opts;
      });
    }
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
        `${options.baseUrl}examples`,
        express.static(examplesDir, {
          setHeaders: response => {
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
          },
        }),
      );
    },
  },

  parallel: false,
};

module.exports = options;
