/**
 * Type of css class name in vue.
 */
declare type ClassName =
  | string
  | (string | { [x: string]: any })[]
  | { [x: string]: any };
