const fs = require('fs');
const globby = require('globby');
const hash = require('hash-sum');
const pathResolve = require('./pathResolve');
const options = require('./options');

const readConfig = file => {
  const absolutePath = pathResolve(file);
  if (fs.existsSync(absolutePath)) {
    return fs.readFileSync(absolutePath, 'utf-8');
  }
};

const webpackConfigs = globby
  .sync(pathResolve('build/webpack.*'))
  .map(f => readConfig(f));

/**
 * @param {string} id
 * @param {any | undefined} partialIdentifier
 * @param {string | string[] | undefined} configFiles
 * @return {{cacheDirectory: string; cacheIdentifier: string}}
 */
module.exports = function genCacheConfig(id, partialIdentifier, configFiles) {
  const cacheDirectory = pathResolve(`node_modules/.cache/${id}`);

  const variables = {
    partialIdentifier,
    'cache-loader': require('cache-loader/package.json').version,
    // env: process.env.NODE_ENV,
    'void-ui': options.version,
    webpackConfigs,
  };

  if (configFiles) {
    if (!Array.isArray(configFiles)) {
      configFiles = [configFiles];
    }
    variables.configFiles = configFiles.map(f => readConfig(f)).join('\n');
  }

  const cacheIdentifier = hash(variables);

  return { cacheDirectory, cacheIdentifier };
};
