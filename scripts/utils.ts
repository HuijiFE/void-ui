/**
 * Replace the specified part of the path with the alias.
 */
export function toAlias(path: string): string {
  if (path.startsWith('src/')) {
    return path.replace('src/', '@void/');
  } else if (path.startsWith('docs/')) {
    return path.replace('docs/', '@docs/');
  }

  return path;
}
