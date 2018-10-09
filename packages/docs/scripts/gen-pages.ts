/**
 * Auto copy index.html for gh-pages
 */

import fs from 'fs';
import p from 'path';
import globby from 'globby';
import mkdirp from 'mkdirp';
import { genPathResolve } from '@huiji/shared-utils';

const resolvePath = genPathResolve(__dirname, '..');

async function copy(): Promise<void> {
  const articles: string[][] = await Promise.all(
    ['zh-CN'].map(lang =>
      globby(resolvePath(`src/articles/${lang}/**/*.md`)).then(paths =>
        paths.map(path =>
          path
            .replace(resolvePath(`src/articles/${lang}/`), '')
            .replace(/^\//, '')
            .replace(/\.md$/, ''),
        ),
      ),
    ),
  );

  const indexPath: string = resolvePath('dist/index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`No such file: ${indexPath}`);
  }

  mkdirp.sync(resolvePath('dist/.circleci'));
  fs.copyFileSync(
    resolvePath('../../.circleci/config.yml'),
    resolvePath('dist/.circleci/config.yml'),
  );

  const paths: string[] = ['zh-CN']
    .map((lang, index) => [
      ...articles[index].map(a =>
        resolvePath('dist', lang, 'components', a, 'index.html'),
      ),
    ])
    .reduce<string[]>((result, cur) => {
      result.push(...cur);

      return result;
    }, []);

  await Promise.all(
    paths.map(
      path =>
        new Promise((resolve, reject) => {
          const dir: string = p.dirname(path);
          fs.exists(dir, exists => {
            if (exists) {
              fs.copyFile(
                indexPath,
                path,
                cpError => (cpError ? reject(cpError) : resolve()),
              );
            } else {
              mkdirp(
                dir,
                mkError =>
                  mkError
                    ? reject(mkError)
                    : fs.copyFile(
                        indexPath,
                        path,
                        cpError => (cpError ? reject(cpError) : resolve()),
                      ),
              );
            }
          });
        }),
    ),
  );
}

copy().catch(console.error);
