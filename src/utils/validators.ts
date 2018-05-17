/**
 * Common validators for component props
 */

/**
 * Validate integer
 */
export function integerValidator(value: number): boolean {
  return Number.isInteger(value);
}
