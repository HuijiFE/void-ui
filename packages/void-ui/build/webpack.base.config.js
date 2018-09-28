const path = require('path');
const Config = require('webpack-chain');
const pathResolve = require('./pathResolve');
const genCacheConfig = require('./genCacheConfig');
const options = require('./options');

const config = new Config();

const useThreads = options.parallel && require('os').cpus().length > 1;

process.env.NODE_ENV = 'production';
config.mode('production');
config.devtool('source-map').context(pathResolve('.'));
config.output.path(pathResolve(options.outputDir)).publicPath('');
config.externals({
  vue: {
    commonjs: 'vue',
    commonjs2: 'vue',
    root: 'Vue',
  },
});

config.resolve
  .symlinks(false)
  .extensions.merge(['.js', '.jsx', '.vue', '.json', '.ts', '.tsx']);

// Javascript --------------------------------
{
  const jsRule = config.module
    .rule('js')
    .test(/\.jsx?$/)
    .exclude.add(filepath => {
      // always transpile js in vue files
      if (/\.vue\.jsx?$/.test(filepath)) {
        return false;
      }
      return /node_modules/.test(filepath);
    })
    .end()
    .use('cache-loader')
    .loader('cache-loader')
    .options(
      genCacheConfig(
        'babel-loader',
        {
          '@babel/core': require('@babel/core/package.json').version,
          'babel-loader': require('babel-loader/package.json').version,
        },
        'babel.config.js',
      ),
    )
    .end();

  if (useThreads) {
    jsRule.use('thread-loader').loader('thread-loader');
  }

  jsRule.use('babel-loader').loader('babel-loader');
}
// Vue --------------------------------
{
  const vueLoaderCacheConfig = genCacheConfig('vue-loader', {
    'vue-loader': require('vue-loader/package.json').version,
    '@vue/component-compiler-utils': require('@vue/component-compiler-utils/package.json')
      .version,
    'vue-template-compiler': require('vue-template-compiler/package.json').version,
  });

  config.module
    .rule('vue')
    .test(/\.vue$/)
    .use('cache-loader')
    .loader('cache-loader')
    .options(vueLoaderCacheConfig)
    .end()
    .use('vue-loader')
    .loader('vue-loader')
    .options({
      compilerOptions: {
        preserveWhitespace: false,
      },
      ...vueLoaderCacheConfig,
    });

  config.plugin('vue-loader').use(require('vue-loader/lib/plugin'));
}
// Typescript --------------------------------
{
  const tsRule = config.module.rule('ts').test(/\.ts$/);
  const tsxRule = config.module.rule('tsx').test(/\.tsx$/);

  const addLoaderTs = ({ loader, options }) => {
    tsRule
      .use(loader)
      .loader(loader)
      .options(options);
    tsxRule
      .use(loader)
      .loader(loader)
      .options(options);
  };

  addLoaderTs({
    loader: 'cache-loader',
    options: genCacheConfig(
      'ts-loader',
      {
        'ts-loader': require('ts-loader/package.json').version,
        typescript: require('typescript/package.json').version,
      },
      'tsconfig.json',
    ),
  });

  if (useThreads) {
    addLoaderTs({
      loader: 'thread-loader',
    });
  }

  addLoaderTs({
    loader: 'babel-loader',
  });

  addLoaderTs({
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
      appendTsSuffixTo: ['\\.vue$'],
      happyPackMode: useThreads,
    },
  });
}
// Scss --------------------------------
{
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

  config
    .plugin('extract-css')
    .use(require('mini-css-extract-plugin'), [
      {
        filename: '[name].css',
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
}
// Others --------------------------------

// shims

config.node.merge({
  // prevent webpack from injecting useless setImmediate polyfill because Vue
  // source contains it (although only uses it if it's native).
  setImmediate: false,
  // process is injected via DefinePlugin, although some 3rd party
  // libraries may require a mock to work properly (#934)
  process: 'mock',
  // prevent webpack from injecting mocks to Node native modules
  // that does not make sense for the client
  dgram: 'empty',
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  child_process: 'empty',
});

config
  .plugin('define')
  .use(require('webpack/lib/DefinePlugin'), [
    {
      NODE_ENV: process.env.NODE_ENV,
      VERSION: options.version,
    },
  ])
  .end()
  .plugin('case-sensitive-paths')
  .use(require('case-sensitive-paths-webpack-plugin'))
  .end()
  .plugin('friendly-errors')
  .use(require('friendly-errors-webpack-plugin'))
  .end()
  .plugin('hash-module-ids')
  .use(require('webpack/lib/HashedModuleIdsPlugin'), [
    {
      hashDigest: 'hex',
    },
  ]);

module.exports = config;
