// tslint:disable:no-require-imports no-var-requires no-unsafe-any
/**
 * Auto copy index.html for gh-pages
 */
import fs from 'fs';
import pth from 'path';
import globby from 'globby';
import mkdirp from 'mkdirp';
import { genPathResolve } from '@huiji/shared-utils';

const resolvePath = genPathResolve(__dirname, '..');

const vueConfig = require('../vue.config.js');
const version = require('void-ui/package.json').version;

const { outputDir } = vueConfig;

async function generatePages(): Promise<void> {
  const articles: string[][] = await Promise.all(
    ['zh-CN'].map(async lang =>
      globby(resolvePath(`src/articles/${lang}/**/*.md`)).then(pathsMarkdown =>
        pathsMarkdown.map(path =>
          path
            .replace(resolvePath(`src/articles/${lang}/`), '')
            .replace(/^\//, '')
            .replace(/\.md$/, ''),
        ),
      ),
    ),
  );

  const indexPath: string = resolvePath(`${outputDir}/index.html`);
  if (!fs.existsSync(indexPath)) {
    throw new Error(`No such file: ${indexPath}`);
  }

  mkdirp.sync(resolvePath(`${outputDir}/.circleci`));
  fs.copyFileSync(
    resolvePath('../../.circleci/config.yml'),
    resolvePath(`${outputDir}/.circleci/config.yml`),
  );

  const pathsHtml: string[] = ['zh-CN']
    .map((lang, index) => [
      ...articles[index].map(a =>
        resolvePath(outputDir, lang, 'components', a, 'index.html'),
      ),
    ])
    .reduce<string[]>((result, cur) => {
      result.push(...cur);

      return result;
    }, []);

  await Promise.all(
    pathsHtml.map(
      async path =>
        new Promise((resolve, reject) => {
          const dir: string = pth.dirname(path);
          fs.exists(dir, exists => {
            if (exists) {
              fs.copyFile(indexPath, path, cpError =>
                cpError ? reject(cpError) : resolve(),
              );
            } else {
              mkdirp(dir, mkError =>
                mkError
                  ? reject(mkError)
                  : fs.copyFile(indexPath, path, cpError =>
                      cpError ? reject(cpError) : resolve(),
                    ),
              );
            }
          });
        }),
    ),
  );
}

async function copyExamples(): Promise<void> {
  const dirSrc: string = resolvePath('src/examples');
  const dirDest: string = resolvePath(`${outputDir}/examples/${version}`);
  const examples: string[] = await globby(resolvePath('src/examples/**/*'));

  await Promise.all(
    examples.map(
      async src =>
        new Promise((resolve, reject) => {
          const dest = src.replace(dirSrc, dirDest);
          const dir = pth.dirname(dest);
          if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
          }
          fs.copyFile(src, dest, error => (error ? reject(error) : resolve()));
        }),
    ),
  );
}

Promise.all([generatePages(), copyExamples()]).catch(console.error);
