/**
 * Find the items different in two arrays
 *
 * @example
 * ```ts
 * difference([1, 2, 3, 4, 5], [5, 2, 10])
 * // output: [1, 3, 4]
 * ```
 */
export const difference = <T>(a: T[], b: T[]): T[] =>
  [a, b].reduce((aReduce, bReduce) => aReduce.filter((c) => !bReduce.includes(c)));
