// tslint:disable:no-any no-this-assignment

/**
 * The type of the debounced function.
 */
export type Debounced<T extends Function> = T & {
  clear: any;
  cancel: any;
};

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay?: number,
): Debounced<(...args: P) => void>;

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 * @param immediate invoke the function at leading edge, instead of the trailing
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay: number,
  immediate: boolean,
): Debounced<(...args: P) => R>;

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 * @param immediate invoke the function at leading edge, instead of the trailing
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay: number = 0,
  immediate: boolean = false,
): Debounced<(...args: P) => R | void> {
  type InternalDebounced = Debounced<(...args: P) => R | void>;

  let context: any;
  let params: P | undefined;
  let result: R | undefined;
  let timeoutId: number | undefined;

  function clear(): void {
    context = undefined;
    params = undefined;
    result = undefined;
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }

  function invoke(): void {
    if (!immediate) {
      result = action.apply(context, params);
    }
  }

  function debounced(this: any, ...args: P): R | void {
    params = args;
    context = this;

    if (immediate && !timeoutId) {
      result = action.apply(context, args);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(invoke, delay) as any;

    return result;
  }

  return debounced as InternalDebounced;
}
