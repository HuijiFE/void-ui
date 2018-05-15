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

rimraf.sync('temp', {});
fs.mkdirSync('temp');
rimraf('types/controls', {}, () => undefined);
rimraf('types/locales', {}, () => undefined);
fs.unlink('types/VoidUI.d.ts', () => undefined);

globby(['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue']).then(files =>
  files.forEach(src => {
    const dest: string = src.replace(/^src\//, 'temp/').replace(/\.vue$/, '.ts');
    const dir: string = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }

    fs.readFile(src, (err, data) => {
      let lines: string[] = data.toString().split(/[\n\r]/);

      // get script content of a vue single file component
      if (src.endsWith('.vue')) {
        const start: number = lines.findIndex(line =>
          /^<script.+lang="ts".*>/.test(line),
        );
        const end: number = lines.findIndex(line => line.includes('</script>'));

        lines = lines.slice(start, end + 1);
        lines[0] = lines[0].replace(/<script.+lang="ts".*>/, '');
        lines[lines.length - 1] = lines[lines.length - 1].replace('</script>', '');
      }

      // process reference paths
      lines = lines.map(line => {
        let newLine: string = line;

        if (line.includes("'@void/")) {
          let ref: string = line
            .slice(line.indexOf("'") + 1, line.lastIndexOf("'"))
            .replace('@void', 'src')
            .replace(/\.vue$/, '');

          ref = path.relative(path.dirname(src), ref);
          if (!ref.startsWith('..')) {
            ref = `./${ref}`;
          }

          newLine = `${line.slice(0, line.indexOf("'"))}'${ref}'`;
          if (newLine === "import './VoidUI.scss'") {
            newLine = '';
          }
        }

        return newLine;
      });

      const content: string = lines.join('\n');

      fs.writeFileSync(dest, content);
    });
  }),
);

// copy types files
const typesToCopy: string[] = ['css.shims.d.ts', 'vue.jsx.d.ts', 'vue.shims.d.ts'];
typesToCopy.forEach(file =>
  fs.copyFile(`typings/${file}`, `temp/${file}`, () => undefined),
);

fs.readFile('typings/void-ui.shims.d.ts', (err, data) => {
  fs.writeFile(
    'temp/void-ui.shims.d.ts',
    data.toString().replace('@void', '.'),
    () => undefined,
  );
});
