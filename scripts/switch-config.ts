// tslint:disable:no-console
// tslint:disable:no-relative-imports
// tslint:disable:missing-jsdoc

import * as fs from 'fs';
import chalk from 'chalk';
import { getArgv } from './utils';

const argv: string[] = getArgv();

const config: string = argv[0];

if (config) {
  fs.copyFile(`scripts/tsconfig.${config}.json`, 'tsconfig.json', error => {
    if (error) {
      console.log(chalk.red('ERROR'), error);
    } else {
      console.log(
        `${chalk.greenBright('Success to switch tsconfig.json to ')}${chalk.cyanBright(
          config,
        )}`,
      );
    }
  });
} else {
  console.log('Error: Missing option');
  console.log('Syntax:   tsc [option]');
  console.log('Options:');
  ['--global', '--void'].forEach(arg => console.log(`  ${arg}`));
}
