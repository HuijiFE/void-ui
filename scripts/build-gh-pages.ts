/**
 * Auto copy index.html for gh-pages
 */

import * as fs from 'fs';
import * as p from 'path';
import * as globby from 'globby';
import * as mkdirp from 'mkdirp';

function resolvePath(...paths: string[]): string {
  return p.resolve(__dirname, '../', ...paths);
}

async function copy(): Promise<void> {
  const articles: string[][] = await Promise.all(
    ['zh-CN'].map(lang =>
      globby(resolvePath(`docs/articles/${lang}/**/*.md`)).then(paths =>
        paths.map(path =>
          path
            .replace(resolvePath(`docs/articles/${lang}/`), '')
            .replace(/^\//, '')
            .replace(/\.md$/, ''),
        ),
      ),
    ),
  );

  const indexPath: string = resolvePath('www/client/index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`No such file: ${indexPath}`);
  }

  mkdirp.sync(resolvePath('www/client/.circleci'));
  fs.copyFileSync(
    resolvePath('.circleci/config.yml'),
    resolvePath('www/client/.circleci/config.yml'),
  );

  const paths: string[] = ['zh-CN']
    .map((lang, index) => [
      ...articles[index].map(a =>
        resolvePath('www/client', lang, 'components', a, 'index.html'),
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
