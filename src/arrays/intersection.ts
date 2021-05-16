/**
 * Intersection of two or more arrays
 *
 * @param {...any} arrays
 * @description
 * Returns an array that is the intersection of all the arrays.
 * Each value in the result is present in each of the arrays.
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) // => [1, 2]
 * ```
 */
export const intersection = <T>(...arrays: T[][]): T[] =>
  arrays.reduce((a, b) => a.filter((c) => b.includes(c)));
