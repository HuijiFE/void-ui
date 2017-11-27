'use strict';
const path = require('path');

const solution = {
  // common chunks, all page apps will will use these modules.
  commons: {
    style: './docs/main.scss', // for bundle all style in one file.
  },
  entries: {
    main: './docs/main.ts',
  },
  pages: [
    {
      entry: 'main',
      template: './docs/main.html',
      output: '', // empty means output index.html to assets root
    },
  ],
};

module.exports = solution;
