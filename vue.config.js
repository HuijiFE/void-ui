const path = require('path');
const Config = require('webpack-chain');

const baseUrl = '/void-ui/';
const outputDir = 'www/client';
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
   * @param {Config} config
   */
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);

    // Revise entry
    config.entryPoints
      .delete('app')
      .end()
      .entry('docs')
      .add(resolve(`docs/entry-client.ts`));

    // Customize alias
    config.resolve.alias
      .delete('@')
      .set('@docs', resolve('docs'))
      .set('void-ui$', resolve('lib/void-ui.ts'));
  },
};
