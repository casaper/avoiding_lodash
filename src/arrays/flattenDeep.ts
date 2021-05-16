/**
 * Recursively flattens array.
 *
 * @param arr
 * @example
 * ```ts
 * flattenDeep([1, [[2], [3, [4]], 5]]) // => [1, 2, 3, 4, 5]
 * ```
 */
export const flattenDeep = <T>(arr: any[]): T[] =>
  arr.flatMap((subArray) =>
    Array.isArray(subArray) ? flattenDeep(subArray) : subArray
  );
