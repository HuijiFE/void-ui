// tslint:disable:no-console
// tslint:disable:no-relative-imports
// tslint:disable:missing-jsdoc

import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import * as mkdirp from 'mkdirp';
import * as rimraf from 'rimraf';
import chalk from 'chalk';
import { getArgv } from './utils';

const log = console.log;

async function removeCss(): Promise<void> {
  const mainFile: string = 'types/VoidUI.d.ts';
  const content: string = fs.readFileSync(mainFile).toString();
  fs.writeFileSync(mainFile, content.replace("import 'normalize.css';\n", ''));
}

async function formatFiles(): Promise<void> {
  const files: string[] = await globby([
    'types/controls/**/*.d.ts',
    'types/locales/**/*.d.ts',
    'types/VoidUI.d.ts',
  ]);

  await Promise.all(
    files.map(
      file =>
        new Promise<void>((resolve, reject) => {
          fs.readFile(file, (errorRead, data) => {
            if (errorRead) {
              reject(errorRead);
            }

            const lines: string[] = data.toString().split('\n');

            for (let i: number = 0; i < lines.length; i++) {
              if (i === 0) {
                continue;
              }

              const preLine: string = i > 0 ? lines[i - 1] : '';
              const curLine: string = lines[i];

              let isSection: boolean = false;
              if (curLine === '/**') {
                isSection = true;
              } else if (
                /^(export|declare)/.test(curLine) &&
                !curLine.includes(' from ') &&
                preLine !== ' */'
              ) {
                isSection = true;
              }

              if (isSection) {
                lines[i] = `\n${curLine}`;
              }
            }

            fs.writeFile(file, lines.join('\n'), errorWrite => {
              if (errorWrite) {
                reject(errorWrite);
              }
              resolve();
            });
          });
        }),
    ),
  );
}

async function removeTempDir(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    rimraf('temp', {}, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
}

Promise.all([removeCss(), formatFiles(), removeTempDir()]).then(() =>
  log(
    chalk.black.bgGreen(' DONE '),
    chalk.green('Declaration files generating complete.'),
  ),
);
