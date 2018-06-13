/**
 * Math extension functions.
 */

/**
 * Get get random integer number.
 */
function randomInt(max: number): number {
  // tslint:disable-next-line:insecure-random
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  randomInt,
};
