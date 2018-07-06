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

/**
 * Restrict the value in the specific range.
 * @param value the raw value
 */
export function clamp(value: number, min: number, max: number): number {
  if (value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }

  return value;
}

/**
 * Create a clamp function for restricting the value in the specific range.
 */
export function createClamp(min: number, max: number): (value: number) => number {
  return (value: number) => clamp(value, min, max);
}
