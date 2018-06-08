// tslint:disable:no-any
/**
 * Filters
 */

/**
 * Vue filter function
 */
export type FilterFunction = (value: any, ...args: any[]) => string;

/**
 * Collection of vue filter functions.
 */
export interface FilterCollection {
  readonly [name: string]: FilterFunction;
}

/**
 * A set of vue filters.
 */
// tslint:disable-next-line:typedef
export const filters = {
  fixed(fractionDigits: number): (value: number) => string {
    return (value: number) => value.toFixed(fractionDigits);
  },
};
