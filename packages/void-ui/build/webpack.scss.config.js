const pathResolve = require('./pathResolve');
const options = require('./options');
const config = require('./webpack.base.config');

config.entry(options.name).add(pathResolve('src/index.scss'));
config.output.filename(`[name].css.js`);

module.exports = config.toConfig();
