export type InnerFunction<P extends unknown[], R> = (...args: P) => R;
export type OuterFunction<P, R> = (arg: P) => R;
export type ComposedFunction<P extends unknown[], R> = (...args: P) => R;

export const compose =
  <T extends unknown[], V, W>(
    outer: OuterFunction<V, W>,
    inner: InnerFunction<T, V>
  ): ComposedFunction<T, W> =>
    (...innerParams: T) =>
      outer(inner(...innerParams));
