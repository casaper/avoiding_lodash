type InnerFunction<T extends unknown[], V> = (...args: T) => V;
type OuterFunction<V, W> = (arg: V) => W;

export const compose =
  <T extends unknown[], V, W>(
    outer: OuterFunction<V, W>,
    inner: InnerFunction<T, V>
  ) =>
  (...innerParams: T) =>
    outer(inner(...innerParams));
