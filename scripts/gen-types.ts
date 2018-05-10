// tslint:disable:no-console
// tslint:disable:no-relative-imports
// tslint:disable:missing-jsdoc

import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import * as mkdirp from 'mkdirp';
import * as rimraf from 'rimraf';
import chalk from 'chalk';

function preProcess(): void {
  rimraf.sync('temp');

  globby.sync(['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue']).forEach(src => {
    const dest: string = src.replace(/^src\//, 'temp/').replace(/\.vue$/, '.ts');
    const dir: string = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }

    let lines: string[] = fs
      .readFileSync(src)
      .toString()
      .split(/[\n\r]/);

    // get script content of a vue single file component
    if (src.endsWith('.vue')) {
      const start: number = lines.findIndex(line => /^<script.+lang="ts".*>/.test(line));
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

  // copy types files
  {
    fs.copyFileSync('typings/css.shims.d.ts', 'temp/css.shims.d.ts');

    fs.writeFileSync(
      'temp/void-ui.shims.d.ts',
      fs
        .readFileSync('typings/void-ui.shims.d.ts')
        .toString()
        .replace('@void', '.'),
    );

    fs.copyFileSync('typings/vue.jsx.d.ts', 'temp/vue.jsx.d.ts');
    fs.copyFileSync('typings/vue.shims.d.ts', 'temp/vue.shims.d.ts');
  }

  rimraf.sync('types/controls');
  rimraf.sync('types/locales');
  fs.unlinkSync('types/VoidUI.d.ts');
}

function postProcess(): void {
  // do something
}

const argv: string[] = process.argv
  .filter(arg => arg.startsWith('--'))
  .map(arg => arg.replace(/^--/, ''));
// argv.forEach((arg, index) => console.log(index, arg));

if (argv.includes('pre')) {
  preProcess();
} else if (argv.includes('post')) {
  postProcess();
}
