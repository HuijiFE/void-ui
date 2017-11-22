const browsers = ['> 1%', 'last 2 versions', 'ie >= 9'];

module.exports = {
  plugins: {
    autoprefixer: {
      browsers,
    },
    cssnano: {
      preset: [
        'default',
        {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
