// tslint:disable:no-any no-this-assignment

/**
 * The type of the debounced function.
 */
export type Debounced<P extends any[], R> = ((...args: P) => void) & {
  clear(): void;
};

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay?: number,
): Debounced<P, R>;

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 * @param immediate if true invoke the function at leading edge, instead of the trailing
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay: number,
  immediate: true,
): Debounced<P, R>;

/**
 * Create a debounced function.
 * @param action the function to debounce
 * @param delay the number of milliseconds to delay invoking
 * @param immediate if true invoke the function at leading edge, instead of the trailing
 */
export default function debounce<P extends any[], R>(
  action: (...args: P) => R,
  delay: number,
  immediate: false,
): Debounced<P, R>;

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
): Debounced<P, R> {
  type InternalDebounced = Debounced<P, R>;

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
    timeoutId = undefined;
    if (!immediate) {
      result = action.apply(context, params);
    }
  }

  const wrapper: (...args: P) => void = function(this: any, ...args: P): void {
    params = args;
    context = this;

    if (immediate && !timeoutId) {
      result = action.apply(context, params);
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(invoke, delay) as any;
  };

  (wrapper as InternalDebounced).clear = clear;

  return wrapper as InternalDebounced;
}
