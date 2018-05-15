const path = require('path');
const package = require('./package.json');
const Config = require('webpack-chain');

const { version } = package;

const HASH_FUNCTION = 'sha256';
const HASH_DIGEST = 'hex';
const HASH_DIGEST_LENGTH = 64;

const solutions = {
  docs: 'docs',
  void: 'void',
};
const dests = {
  docs: 'www',
  void: 'dist',
};

const SOLUTION = process.env.VUE_SOLUTION;
const docsDir = 'docs';

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
  outputDir: dests[SOLUTION],

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  compiler: true,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  transpileDependencies: [
    /* string or regex */
  ],

  // generate sourceMap for production build?
  productionSourceMap: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  /**
   * @param {Config} config
   */
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = _path => path.resolve(context, _path);

    // hacking entry for docs
    if (SOLUTION === solutions.docs) {
      config
        .entry('app')
        .clear()
        .add(resolve(`${docsDir}/main.ts`));
    }

    // customize alias

    config.resolve.alias
      .delete('@')
      .set('@void', resolve('src'))
      .set('@docs', resolve(docsDir));

    if (process.env.NODE_ENV === 'production') {
      // Customize js output file name with hash.
      config.output
        .filename(`js/void-ui.${version}.[name].[chunkhash].js`)
        .chunkFilename(`js/void-ui.${version}.[name].[chunkhash].js`)
        .hashFunction(HASH_FUNCTION)
        .hashDigest(HASH_DIGEST)
        .hashDigestLength(HASH_DIGEST_LENGTH);
    }
  },
  configureWebpack: () => {},

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: {
      // Customize css output file name with hash.
      filename: `css/void-ui.${version}.[name].[contenthash].css`,
      chunkFilename: `css/void-ui.${version}.[name].[id].[contenthash].css`,
      hashFunction: HASH_FUNCTION,
      hashDigest: HASH_DIGEST,
      hashDigestLength: HASH_DIGEST_LENGTH,
    },

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

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
