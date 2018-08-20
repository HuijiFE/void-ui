import * as p from 'path';
import * as fs from 'fs';
import * as globby from 'globby';
import * as mkdirp from 'mkdirp';
import * as changeCase from 'change-case';
import chalk from 'chalk';
const labelLength: number = 20;

type Resolver = (path: string, name: string, ext: string) => string;

interface GenerateOptions {
  patterns: string | string[];
  output: string;
  comments?: string[];
  resolver?: Resolver;
}

/**
 * Replace the matching part with alias in the path.
 * @param path the path
 */
function alias(path: string): string {
  return path.replace(/^docs/, '@docs').replace(/^lib/, '@void/ui/lib');
}

function generateIndex(files: string[], resolver: Resolver): string {
  return files
    .sort()
    .map(f => {
      const path: string = alias(f);
      const ext: string = p.extname(f);
      const name: string = p.basename(f).replace(new RegExp(`${ext}$`), '');

      return resolver(path, name, ext);
    })
    .join('\n');
}

/**
 * Use files paths to generate export/import statements.
 * @param files paths of files
 * @param noVue forbidden .vue files
 */
function generateIndexTs(files: string[], resolver?: Resolver): string {
  const resolve: Resolver =
    resolver ||
    ((path, name, ext) => {
      switch (ext) {
        case '.vue':
          return `export { default as ${name} } from '${path}';`;

        case '.ts':
        case '.tsx':
        case '.js':
        case '.jsx':
          return `export * from '${path.replace(/\.(j|t)sx?$/, '')}';`;

        default:
          throw new Error(`Cannot import ${ext} file (${path}) in .ts file.`);
      }
    });

  return files
    .sort()
    .map(f => {
      const path: string = alias(f);
      const ext: string = p.extname(f);
      const name: string = p.basename(f).replace(new RegExp(`${ext}$`), '');

      return resolve(path, name, ext);
    })
    .join('\n');
}

/**
 * Use files paths to generate export/import statements.
 * @param files paths of files
 */
function generateIndexScss(files: string[], resolver?: Resolver): string {
  const resolve: Resolver =
    resolver ||
    ((path, name, ext) => {
      switch (ext) {
        case '.scss':
        case '.less':
          return `@import '~${path.replace(/\.(scss|less)$/, '')}';`;

        default:
          throw new Error(`Cannot import ${ext} file (${path}) in .scss/.less file.`);
      }
    });

  return files
    .sort()
    .map(f => {
      const path: string = alias(f);
      const ext: string = p.extname(f);
      const name: string = p.basename(f).replace(new RegExp(`${ext}$`), '');

      return resolve(path, name, ext);
    })
    .join('\n');
}

function generateComments(comments: string[], jsdoc: boolean = true): string {
  return jsdoc
    ? `
/**
${comments.map(c => ` * ${c}`).join('\n')}
 */
`
    : comments.map(c => `// ${c}`).join('\n');
}

const banner: string = generateComments(
  [
    'Do not edit this file.',
    'It is auto generated by script "scripts/gen-files.ts".',
    'To update this file, please run command "yarn gen-files".',
  ],
  false,
);

/**
 * Auto generate source code
 */
async function generateFiles(options: GenerateOptions): Promise<void> {
  const outputExt: string = p.extname(options.output);

  let body: string;
  const files: string[] = await globby([
    ...(Array.isArray(options.patterns) ? options.patterns : [options.patterns]),
    `!${options.output}`,
  ]);

  if (files.length === 0) {
    console.info(
      chalk.bgYellow.black(' Files No Found '.padEnd(labelLength, ' ')),
      chalk.green(options.output),
    );

    return;
  }

  switch (outputExt) {
    case '.ts':
    case '.tsx':
    case '.js':
    case '.jsx':
      body = generateIndexTs(files, options.resolver);
      break;
    case '.scss':
    case '.less':
      body = generateIndexScss(files, options.resolver);
      break;

    default:
      if (options.resolver) {
        body = generateIndex(files, options.resolver);
      } else {
        throw new Error(
          `Cannot generate "${options.output}", ${p.extname(
            options.output,
          )} file is unsupported by default, please provide a resolver function.`,
        );
      }
  }

  const comments: string =
    options.comments && options.comments.length > 0
      ? generateComments(options.comments)
      : '';

  const content: string = `${banner}
${comments}
${body}
`.replace(/\n+$/, '\n');

  return new Promise<void>((resolve, reject) => {
    const dir: string = p.dirname(options.output);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }

    if (!fs.existsSync(options.output)) {
      fs.writeFileSync(options.output, '');
    }

    fs.readFile(options.output, 'utf-8', (readError, oldContent) => {
      if (readError) {
        return reject(readError);
      }
      if (content === oldContent) {
        console.info(
          chalk.bgCyan.black(' Nothing Changed '.padEnd(labelLength, ' ')),
          chalk.green(options.output),
        );

        return resolve();
      }

      fs.writeFile(options.output, content, writeError => {
        if (writeError) {
          return reject(writeError);
        }
        console.info(
          chalk.bgCyanBright.black(' File Updated '.padEnd(labelLength, ' ')),
          chalk.greenBright(options.output),
        );

        return resolve();
      });
    });
  });
}

const optionsList: GenerateOptions[] = [
  // lib
  {
    patterns: ['lib/components/**/*.(tsx|ts)', '!lib/components/base/**/*'],
    output: 'lib/components/all.ts',
    comments: ['All components of void-ui.'],
  },
  {
    patterns: ['lib/components/**/*.scss', '!lib/components/base/**/*'],
    output: 'lib/components/all.scss',
    comments: ['All components style of void-ui.'],
  },

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

  // views
  {
    patterns: ['docs/views/**/*.scss'],
    output: 'docs/views/all.scss',
    comments: ['All views style of void-ui documentation.'],
  },
];

Promise.all(optionsList.map(generateFiles)).catch((e: Error) => {
  console.error(e.message);
  console.error(e.stack);
});
