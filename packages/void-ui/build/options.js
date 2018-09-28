const package = require('../package.json');

module.exports = {
  outputDir: 'dist',
  name: package.name,
  version: package.version,
  parallel: true,
};
