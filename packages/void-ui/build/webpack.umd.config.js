const fs = require('fs');
const Config = require('webpack-chain');
const pathResolve = require('./pathResolve');
const options = require('./options');
const config = require('./webpack.base.config');

config.entry(options.name).add(pathResolve('src/index.ts'));
config.output
  .filename(`[name].umd.js`)
  .library('VoidUI')
  .libraryTarget('umd')
  .libraryExport('default')
  .globalObject("typeof self !== 'undefined' ? self : this");

fs.writeFileSync(
  'temp.webpack.js',
  `module.exports = ${Config.toString(config.toConfig())}`,
);

module.exports = config.toConfig();
