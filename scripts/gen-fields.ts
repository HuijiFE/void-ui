/**
 * Generate field declarations with media alias.
 *
 * Usage:
 *  yarn gen-fields <!|?> [[name type]...]
 *
 * e.g.
 *  yarn gen-fields ? flex "string | number"
 *  yarn gen-fields ! hidden boolean gap boolean
 */

import { MEDIA_ALIASES } from '@void/ui/lib/components/base/match-media/match-media';
import chalk from 'chalk';

function capitalize(text: string): string {
  if (!text) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.substring(1);
}

const args: string[] = process.argv.slice(2);

if (args.length < 3) {
  console.info(
    chalk.redBright('Error: need args, \n  yarn gen-fields <!|?> [[name type]...]'),
  );
  throw new Error('Arguments error.');
}

console.info();

const initializer: string = chalk.cyanBright(args.shift() as string);

while (args.length > 0) {
  const name: string = args.shift() as string;
  const typeName: string = chalk.cyanBright(args.shift() || 'type');

  console.info(chalk.greenBright(`Field declarations width media alias for ${name}:\n`));

  ['', ...MEDIA_ALIASES].forEach(alias => {
    const modifier: string = chalk.blueBright('public readonly');

    console.info(`  ${modifier} ${name}${capitalize(alias)}${initializer}: ${typeName};`);
  });

  console.info();
}
