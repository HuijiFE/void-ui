import express from 'express';
import { genPathResolve } from '@huiji/shared-utils';

const resolvePath = genPathResolve(__dirname, '..');

const PORT = 8102;

async function setup(): Promise<void> {
  const app = express()
    .use('/void-ui', express.static(resolvePath('dist')))
    .get('*', (request, response) =>
      response.sendFile(resolvePath('dist', 'index.html')),
    );

  app.listen(PORT, () => console.info(`Listening at ${PORT}`));
}

setup().catch(console.error);
