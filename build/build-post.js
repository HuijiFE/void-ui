/**
 * Post-build Processing: Move TypeScript Declaration files after build.
 */

'use strict';

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');

const config = require('../config');

const spinner = ora('processing TypeScript declaration files...');
spinner.start();

let oldTypingsPath = path.resolve(__dirname, '../typings');
let source = path.resolve(__dirname, '../dist/typings/src');
let destination = path.resolve(__dirname, '../typings/src');

rm(oldTypingsPath, err => {
  if (err) throw err;

  if (source) {
    fs.copySync(source, destination);
  } else {
    throw Error('Directory "dist/typings/src" not found.');
  }

  rm(path.resolve(__dirname, '../dist/typings'), err => {
    if (err) throw err;
  });

  rm(path.join(config.build.assetsRoot, 'typings'), err => {
    if (err) throw err;
  });

  glob.sync(path.join(destination, '**/*.ts')).forEach(filePath => {
    const level =
      path
        .dirname(filePath)
        .replace(destination, '')
        .split('/').length - 1;

    const related = '../'.repeat(level);

    fs.writeFileSync(
      filePath,
      fs
        .readFileSync(filePath)
        .toString()
        .replace(/from 'src\//g, `from '${related}`),
    );
  });

  spinner.stop();
  console.log(chalk.cyan('  TypeScript declaration files processing completed.'));
});
