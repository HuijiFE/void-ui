const path = require('path');
const package = require('./package.json');

const hashFunction = 'sha256';
const hashDigest = 'hex';
const hashDigestLength = 64;

process.env.VOID_VERSION = package.version;

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: '//cdn.duduluu.com/',

  // where to output built files
  // outputDir: 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  compiler: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // customize alias
    const context = config.store.get('context');
    const resolve = _path => path.resolve(context, _path);
    config.resolve.alias.set('@void', resolve('src')).set('@docs', resolve('docs'));

    if (process.env.NODE_ENV === 'production') {
      // customize js output file name
      config.output
        .filename(`js/[name].[chunkhash].js`)
        .chunkFilename(`js/[id].[chunkhash].js`)
        .hashFunction(hashFunction)
        .hashDigest(hashDigest)
        .hashDigestLength(hashDigestLength);

      // customize css output file name
      config.plugin('extract-css').tap(args => [
        Object.assign(args[0], {
          filename: `css/[name].[${hashFunction}:contenthash:${hashDigest}:${hashDigestLength}].css`,
        }),
      ]);
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
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false,
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  dll: true,

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
    https: true,
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
