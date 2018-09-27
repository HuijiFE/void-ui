const pth = require('path');
const Config = require('webpack-chain');

/**
 *
 * @param  {string[]} paths
 */
const resolve = (...paths) => {
  pth.resolve(__dirname, '..', ...paths);
};

const config = new Config();

config
  .entry('void-ui')
  .add(resolve('src/index.scss'))
  .end()
  .output.path('dist')
  .filename('[name].style.js');

config.module
  .rule('scss')
  .test(/\.scss$/)
  .pre()
  .include.add('src')
  .end();
use;
