const autoprefixer = require('autoprefixer');

module.exports = ctx => ({
  plugins: [
    autoprefixer({
      browsers: [
        '>0.5%',
        'last 2 versions',
        'not dead',
        'not ie <= 8',
        'not op_mini all',
      ],
    }),
  ],
});
