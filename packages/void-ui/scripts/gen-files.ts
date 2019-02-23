/**
 * Auto generate files
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
];

Promise.all(optionsList.map(genFiles)).catch((e: Error) => {
  console.error(e.message);
  console.error(e.stack);
});
