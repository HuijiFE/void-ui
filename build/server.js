const path = require('path');
const express = require('express');
const { setup } = require('./setup-ssr');

/**
 * @type {'development' | 'production'}
 */
const NODE_ENV = process.env.NODE_ENV;

const PORT = process.env.PORT || 8080;

const resolve = (...paths) => path.resolve(__dirname, '../', ...paths);

global.window = undefined;

const app = express();

const static = dir =>
  express.static(
    'www/client/static',
    NODE_ENV === 'production'
      ? {
          index: false,
          maxAge: 365 * 24 * 60 * 60 * 1000,
          etag: true,
        }
      : undefined,
  );

app.use('/static', express.static('www/client/static'));
app.use('/examples', express.static('www/client/examples'));

setup(
  NODE_ENV,
  app,
  resolve('public/template.html'),
  resolve('www/server'),
  resolve('www/client'),
);

app.listen(PORT, () => {
  console.info(`
  Server started at localhost:${PORT}
  NODE_ENV: ${NODE_ENV}

  Press CTRL+C to stop.
`);
});
