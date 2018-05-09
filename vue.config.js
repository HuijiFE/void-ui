const path = require('path');
const package = require('./package.json');
const Config = require('webpack-chain');

const HASH_FUNCTION = 'sha256';
const HASH_DIGEST = 'hex';
const HASH_DIGEST_LENGTH = 64;

const solutionsAll = {
  docs: 'docs',
  void: 'void',
};
const SOLUTION = process.env.VUE_SOLUTION;

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: '/void-ui/',

  // where to output built files
  outputDir:
    SOLUTION === solutionsAll.docs
      ? 'www'
      : SOLUTION === solutionsAll.void
        ? 'dist'
        : 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  compiler: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  /**
   * @param {Config} config
   */
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = _path => path.resolve(context, _path);

    // hacking entry for docs
    if (SOLUTION === solutionsAll.docs) {
      config
        .entry('app')
        .clear()
        .add(resolve('docs/main.ts'));
    }

    // customize alias

    config.resolve.alias
      .delete('@')
      .set('@void', resolve('src'))
      .set('@docs', resolve('docs'));

    if (process.env.NODE_ENV === 'production') {
      // customize js output file name
      config.output
        .filename(`js/[name].[chunkhash].js`)
        .chunkFilename(`js/[id].[chunkhash].js`)
        .hashFunction(HASH_FUNCTION)
        .hashDigest(HASH_DIGEST)
        .hashDigestLength(HASH_DIGEST_LENGTH);

      // customize css output file name
      config.plugin('extract-css').tap(args => [
        Object.assign(args[0], {
          filename: `css/[name].[${HASH_FUNCTION}:contenthash:${HASH_DIGEST}:${HASH_DIGEST_LENGTH}].css`,
        }),
      ]);

      if (SOLUTION === solutionsAll.void) {
        config.module
          .rule('ts')
          .use('ts-loader')
          .loader('ts-loader')
          .tap(option => {
            option.transpileOnly = false;
            option.happyPackMode = false;
            return option;
          });
        console.log('======== Void-UI ========');
      }
    }
  },
  configureWebpack: () => {},

  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  vueLoader: {},

  // generate sourceMap for production build?
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  dll: false,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    //   workboxOptions: {
    //     importWorkboxFrom: 'local',
    //   },
  },

  // configure webpack-dev-server behavior
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {},
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  },
};
