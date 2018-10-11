// tslint:disable:no-any no-unsafe-any no-this-assignment

/**
 * The type of the throttled function
 */
export type Throttled<P extends any[], R> = ((...args: P) => void) & {
  clear(): void;
};

/**
 *
 * @param action the function to throttle
 * @param interval the number of milliseconds between invoking
 * @param lazy if true, not invoke the function at first calling
 */
export function throttle<P extends any[], R>(
  action: (...args: P) => R,
  interval: number = 0,
  lazy: boolean = false,
): Throttled<P, R> {
  type InternalThrottled = Throttled<P, R>;

  let context: any;
  let params: P | undefined;
  let result: R | undefined;
  let timeoutId: number | undefined;
  let last: number = 0;

  function clear(): void {
    context = undefined;
    params = undefined;
    result = undefined;
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }

  function invoke(): void {
    last = Date.now();
    timeoutId = undefined;
    result = action.apply(context, params);
  }

  const wrapper: (...args: P) => void = function(this: any, ...args: P): void {
    const present: number = Date.now();
    params = args;
    context = this;

    if (last + interval < present) {
      last = present;
      if (!lazy) {
        result = action.apply(context, params);
      }
    }

    if (!timeoutId) {
      timeoutId = setTimeout(invoke, last + interval - present) as any;
    }
  };

  (wrapper as InternalThrottled).clear = clear;

  return wrapper as InternalThrottled;
}
