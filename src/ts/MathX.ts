/**
 * Math extension functions.
 */

/**
 * Get get random integer number.
 */
export function randomInt(max: number): number {
  // tslint:disable-next-line:insecure-random
  return Math.floor(Math.random() * Math.floor(max));
}
