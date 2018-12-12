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
      'packages/void-ui/src/components/**/*.(tsx|ts)',
      '!packages/void-ui/src/components/base/**/*',
      '!packages/void-ui/src/components/**/_base.*',
    ],
    output: 'packages/void-ui/src/components/all.ts',
    comments: ['All components of void-ui.'],
  },
  {
    patterns: [
      'packages/void-ui/src/components/**/*.scss',
      '!packages/void-ui/src/components/base/**/*',
    ],
    output: 'packages/void-ui/src/components/all.scss',
    comments: ['All components style of void-ui.'],
  },
  {
    patterns: ['packages/void-ui/src/plugins/**/*.ts'],
    output: 'packages/void-ui/src/plugins/all.ts',
    comments: ['All Vue plugins of void-ui.'],
  },

  // ----------------------------------------------------------------
  // docs

  // components
  {
    patterns: ['packages/docs/src/components/**/*.(tsx|ts)'],
    output: 'packages/docs/src/components/all.ts',
    comments: ['All components of void-ui documentation.'],
  },
  {
    patterns: ['packages/docs/src/components/**/*.scss'],
    output: 'packages/docs/src/components/all.scss',
    comments: ['All components style of void-ui documentation.'],
  },

  // examples
  {
    patterns: ['packages/docs/src/examples/**/*.scss'],
    output: 'packages/docs/src/examples/all.scss',
    comments: ['All examples style of void-ui documentation.'],
  },
  {
    patterns: ['packages/docs/src/examples/*/**/*.tsx'],
    output: 'packages/docs/src/examples/all-tsx.ts',
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
    patterns: ['packages/docs/src/examples/*/**/*.vue'],
    output: 'packages/docs/src/examples/all-vue.ts',
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
      'packages/docs/src/examples/*/**/*.scss',
      'packages/docs/src/examples/*/**/*.tsx',
      'packages/docs/src/examples/*/**/*.vue',
    ],
    output: 'packages/docs/src/examples/all.ts',
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
  patterns: [`packages/docs/src/articles/${lang}/**/*.md`],
  output: `packages/docs/src/articles/${lang}/all.ts`,
  comments: ['All articles'],
  header:
    "import { RouteConfig } from 'vue-router';\n\n const articles: RouteConfig[] = [",
  footer: '];\n\nexport default articles',
  body: files => {
    return files
      .map(info => {
        const path: string = info.path.replace('./', '').replace(/\.md$/, '');

        const name: string = fs
          .readFileSync(
            info.path.replace('.', `packages/docs/src/articles/${lang}`),
            'utf-8',
          )
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
