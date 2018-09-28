const path = require('path');

/**
 * Resolve relative paths to absolute path.
 * @param  {string[]} paths path parts to resolve
 * @return {string}
 */
module.exports = function pathResolve(...paths) {
  return path.resolve(__dirname, '..', ...paths);
};
