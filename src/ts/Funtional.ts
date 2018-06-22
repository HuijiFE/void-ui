// tslint:disable:no-any no-implicitly-any no-function-expression no-invalid-this

/**
 * Compose multiple functions into one.
 */
export function compose<T1, T2, R>(
  fn1: (value: T1) => T2,
  fn2: (value: T2) => R,
): (value: T1) => R;
export function compose<T1, T2, T3, R>(
  fn1: (value: T1) => T2,
  fn2: (value: T2) => T3,
  fn3: (value: T3) => R,
): (value: T1) => R;
export function compose<T1, T2, T3, T4, R>(
  fn1: (value: T1) => T2,
  fn2: (value: T2) => T3,
  fn3: (value: T3) => T4,
  fn4: (value: T4) => R,
): (value: T1) => R;
export function compose<T1, T2, T3, T4, T5, R>(
  fn1: (value: T1) => T2,
  fn2: (value: T2) => T3,
  fn3: (value: T3) => T4,
  fn4: (value: T4) => T5,
  fn5: (value: T5) => R,
): (value: T1) => R;
export function compose<T1, T2, T3, T4, T5, T6, R>(
  fn1: (value: T1) => T2,
  fn2: (value: T2) => T3,
  fn3: (value: T3) => T4,
  fn4: (value: T4) => T5,
  fn5: (value: T5) => T6,
  fn6: (value: T6) => R,
): (value: T1) => R;
export function compose(...fns: ((value: any) => any)[]): (value: any) => any;
export function compose(...fns: ((value: any) => any)[]): (value: any) => any {
  if (fns.length === 0) {
    return value => value;
  }
  if (fns.length === 1) {
    return fns[0];
  }

  return value => fns.reduce((mv, f) => f(mv), fns[0](value));
}
