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

const spinner = ora('moving TypeScript declaration files...');
spinner.start();

rm(path.resolve(__dirname, '../typings'), err => {
  if (err) throw err;

  if (fs.existsSync('dist/typings/src')) {
    fs.copySync(
      path.resolve(__dirname, '../dist/typings/src'),
      path.resolve(__dirname, '../typings/src'),
    );
  } else {
    throw Error('Directory "dist/typings/src" not found.');
  }

  rm(path.resolve(__dirname, '../dist/typings'), err => {
    if (err) throw err;
  });

  rm(path.join(config.build.assetsRoot, 'typings'), err => {
    if (err) throw err;
  });

  spinner.stop();
  console.log(
    chalk.cyan('  TypeScript declaration files have been moved to directory "typings".'),
  );
});
