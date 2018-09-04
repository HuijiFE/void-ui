const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, {
    ...options,
    runInNewContext: false,
  });
}

/**
 * @param {'development' | 'production'} mode
 * @param {express.Application} app
 * @param {string} templatePath
 * @param {string} serverOutputDir
 * @param {string} clientOutputDir
 */
module.exports.setup = (mode, app, templatePath, serverOutputDir, clientOutputDir) => {
  let isDev = mode === 'development';
  let renderer;

  const update = () =>
    (renderer = createRenderer(require(`${serverOutputDir}/vue-ssr-server-bundle.json`), {
      template: fs.readFileSync(templatePath, 'utf-8'),
      clientManifest: clientOutputDir
        ? require(`${clientOutputDir}/vue-ssr-client-manifest.json`)
        : undefined,
    }));

  update();
  if (isDev) {
    [templatePath, serverOutputDir, clientOutputDir]
      .filter(path => path)
      .forEach(path => fs.watch(path, update));
  }

  /**
   * @param {express.Request} request
   * @param {express.Response} response
   */
  function render(request, response, next) {
    const s = Date.now();

    response.setHeader('Content-Type', 'text/html');

    renderer.renderToString({ url: request.url }, (error, html) => {
      if (error) {
        return next(error);
      }

      response.send(html);

      if (!isProd) {
        console.info(`Render cost: ${Date.now() - s}ms, url: ${request.url}`);
      }
    });
  }

  app.use(render);

  /**
   * @param {express.Request} request
   * @param {express.Response} response
   */
  function errorHandler(error, request, response, next) {
    if (error.url) {
      response.redirect(error.url);
    } else if (error.code === 404) {
      response.status(400).send('404 | Page Not Found');
    } else {
      response.status(500).send('500 | Internal Server Error');
      console.error(`error during render: ${request.url}`);
      console.error(error.message);
      console.error(error.stack);
    }
  }

  app.use(errorHandler);
};
