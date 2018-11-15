/**
 * Utils about math
 */

// tslint:disable:insecure-random
/**
 * Get a random number from `min` to `max`, include both of `min` and `max`.
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Get a integer from `min` and `max`, the `max` is exclusive and the `min` is inclusive
 */
export function randomInt(min: number, max: number): number {
  // tslint:disable:no-parameter-reassignment
  min = Math.ceil(min);
  max = Math.floor(max);
  // tslint:enable:no-parameter-reassignment

  return Math.floor(Math.random() * (max - min)) + min;
}
// tslint:enable:insecure-random

/**
 * Get a random element in the array.
 */
export function randomElement<T>(array: T[]): T {
  return array[randomInt(0, array.length)];
}
