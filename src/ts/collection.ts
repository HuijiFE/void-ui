/**
 * Generic collection type definitions.
 */

/**
 * A dict mode map object type, use string as key type.
 */
export interface StringMap<T> {
  [key: string]: T;
}

/**
 * A dict mode map object type, use number as key type.
 */
export interface NumberMap<T> {
  [key: number]: T;
}
