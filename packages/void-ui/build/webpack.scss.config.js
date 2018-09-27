const pth = require('path');
const Config = require('webpack-chain');
const filename = '[name].css';

/**
 *
 * @param  {string[]} paths
 */
const resolve = (...paths) => pth.resolve(__dirname, '..', ...paths);

const config = new Config();

config
  .mode('production')
  .context(resolve('.'))
  .entry('void-ui')
  .add(resolve('src/index.scss'));

config.output
  .path(resolve('dist'))
  .filename(`${filename}.js`)
  .publicPath('./');

config.module
  .rule('scss')
  .test(/\.scss$/)
  .use('extract-css-loader')
  .loader(require('mini-css-extract-plugin').loader)
  .options({
    publicPath: './',
  })
  .end()
  .use('css-loader')
  .loader('css-loader')
  .options({
    sourceMap: false,
    importLoaders: 2,
  })
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .options({
    sourceMap: false,
  })
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .options({
    sourceMap: false,
  })
  .end();

config.optimization
  .removeEmptyChunks(true)
  .end()
  .plugin('extract-css')
  .use(require('mini-css-extract-plugin'), [
    {
      filename,
      chunkFilename: filename,
    },
  ])
  .end()
  .plugin('optimize-css')
  .use(require('@intervolga/optimize-cssnano-plugin'), [
    {
      sourceMap: false,
      cssnanoOptions: {
        safe: true,
        autoprefixer: { disable: true },
        mergeLonghand: false,
      },
    },
  ]);

module.exports = config.toConfig();
