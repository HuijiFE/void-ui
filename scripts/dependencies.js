const chalk = require('chalk');
const { dependencies, devDependencies } = require('../package.json');

console.log('yarn add \\');
Object.keys(dependencies).forEach(m => console.log(`  ${m} \\`));
console.log();
console.log('yarn add -D \\');
Object.keys(devDependencies).forEach(m => console.log(`  ${m} \\`));
console.log();
