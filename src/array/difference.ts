/**
 *
 * Creates an array of array values not included in the other given arrays.
 *
 * @example
 * ```ts
 * difference([1, 2, 3, 4, 5], [5, 2, 10]) // output: [1, 3, 4]
 * ```
 */
export const difference = <T>(origin: T[], ...subjects: T[][]): T[] =>
  [origin, ...subjects].reduce((aReduce, bReduce) =>
    aReduce.filter((c) => !bReduce.includes(c))
  );
