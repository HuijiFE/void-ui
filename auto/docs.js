const fs = require('fs');
const path = require('path');
const glob = require('glob');

glob.sync('docs/examples/**/*.vue').forEach(filePath => {
  let sourceFilePath = filePath.replace(/\.vue$/, '.txt');
  fs.copyFile(filePath, sourceFilePath, err => {
    if (err) console.log(err);
  });
});
