/**
 * Generate files
 */
import { GenFilesOptions, genFiles } from '@huiji/shared-utils';
import * as fs from 'fs';
import * as pth from 'path';

const optionsList: GenFilesOptions[] = [
  // ----------------------------------------------------------------
  // lib
  {
    patterns: [
      'src/components/**/*.(tsx|ts)',
      '!src/components/base/**/*',
      '!src/components/**/_base.*',
    ],
    output: 'src/components/all.ts',
    comments: ['All components of void-ui.'],
  },
  {
    patterns: ['src/components/**/*.scss', '!src/components/base/**/*'],
    output: 'src/components/all.scss',
    comments: ['All components style of void-ui.'],
  },
  {
    patterns: ['src/plugins/**/*.ts'],
    output: 'src/plugins/all.ts',
    comments: ['All Vue plugins of void-ui.'],
  },

  // ----------------------------------------------------------------
  // docs

  // components
  {
    patterns: ['docs/components/**/*.(tsx|ts)'],
    output: 'docs/components/all.ts',
    comments: ['All components of void-ui documentation.'],
  },
  {
    patterns: ['docs/components/**/*.scss'],
    output: 'docs/components/all.scss',
    comments: ['All components style of void-ui documentation.'],
  },

  // examples
  {
    patterns: ['docs/examples/**/*.scss'],
    output: 'docs/examples/all.scss',
    comments: ['All examples style of void-ui documentation.'],
  },
  {
    patterns: ['docs/examples/*/**/*.tsx'],
    output: 'docs/examples/all-tsx.ts',
    comments: ['All .tsx examples of void-ui documentation.'],
    header: 'export default {',
    footer: '};',
    item: ({ path, name, ext }) => {
      const key: string = path.replace('./', '').replace(/\.tsx/, '');
      const chunkName: string = `examples-${pth.dirname(key).replace(/\//g, '_')}`;

      return `${`  '${key}'`.padEnd(
        48,
        ' ',
      )}: async () => import(/* webpackChunkName: "${chunkName}" */ '${path.replace(
        /\.tsx$/,
        '',
      )}'),`;
    },
  },
  {
    patterns: ['docs/examples/*/**/*.vue'],
    output: 'docs/examples/all-vue.ts',
    comments: ['All .vue examples of void-ui documentation.'],
    header: 'export default {',
    footer: '};',
    item: ({ path, name, ext }) => {
      const key: string = path.replace('./', '').replace(/\.vue/, '');
      const chunkName: string = `examples-${pth.dirname(key).replace(/\//g, '_')}`;

      return `${`  '${key}'`.padEnd(
        48,
        ' ',
      )}: async () => import(/* webpackChunkName: "${chunkName}" */ '${path}'),`;
    },
  },
  {
    patterns: [
      'docs/examples/*/**/*.scss',
      'docs/examples/*/**/*.tsx',
      'docs/examples/*/**/*.vue',
    ],
    output: 'docs/examples/all.ts',
    comments: ['All examples source code of void-ui documentation.'],
    header: 'export default {',
    footer: '};',
    body: files => {
      const record: Record<string, string[]> = {};
      files.forEach(info => {
        const key: string = info.path.replace('./', '').replace(/\.(scss|tsx?|vue)/, '');
        (record[key] || (record[key] = [])).push(`'${info.ext.substring(1)}'`);
      });

      return Object.entries(record)
        .map(([path, exts]) => `  '${path}': [ ${exts.join(', ')} ],`)
        .join('\n');
    },
  },
];

const optionsListArticle: GenFilesOptions[] = ['zh-CN'].map<GenFilesOptions>(lang => ({
  patterns: [`docs/articles/${lang}/**/*.md`],
  output: `docs/articles/${lang}/all.ts`,
  comments: ['All articles'],
  header:
    "import { RouteConfig } from 'vue-router';\n\n const articles: RouteConfig[] = [",
  footer: '];\n\nexport default articles',
  body: files => {
    return files
      .map(info => {
        const path: string = info.path.replace('./', '').replace(/\.md$/, '');

        const name: string = fs
          .readFileSync(info.path.replace('.', `docs/articles/${lang}`), 'utf-8')
          .split('\n')[0]
          .replace(/^#+/, '')
          .trim();

        return `  {
    path: '${path}',
    name: '${name}',
    component: async () => import('${info.path}'),
  },`;
      })
      .join('\n');
  },
}));

Promise.all([...optionsList, ...optionsListArticle].map(genFiles)).catch((e: Error) => {
  console.error(e.message);
  console.error(e.stack);
});
