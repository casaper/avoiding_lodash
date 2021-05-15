/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const isFunction = (func?: any): boolean => func && typeof func === 'function';
export const isString = (str?: any): str is string => str && typeof str.valueOf() === 'string';
export const isInt = (num: any): boolean => Number.isInteger(num);
export const isPlainObject = (obj: any): boolean =>
  Object.prototype.toString.call(obj) === '[object Object]';

export const isEmpty = (obj?: any): boolean =>
  Boolean([Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length);

type InnerFunction<T extends unknown[], V> = (...args: T) => V;
type OuterFunction<V, W> = (arg: V) => W;

export const compose =
  <T extends unknown[], V, W>(outer: OuterFunction<V, W>, inner: InnerFunction<T, V>) =>
  (...innerParams: T) =>
    outer(inner(...innerParams));

export const pipe = <T extends unknown[], V, W>(
  ...functions: (OuterFunction<V, W> | InnerFunction<T, V>)[]
) => functions.reduceRight((prev, curr) => compose(prev, curr));

export const compact = <T>(arr: T[]): T[] => arr.filter(Boolean);
export const sort = <T>(arr: T[]): T[] => arr.sort();
export const reverse = <T>(arr: T[]): T[] => arr.reverse();
export const concat = <T>(arr: T[], ...elements: T[]): T[] => arr.concat(...elements);
export const first = <T>(arr: T[]): T => arr[0];
export const last = <T>(arr: T[]): T => arr.slice(-1)[0];

/**
 * Checks if n is between start and up to, but not including, end.
 *
 * If end is not specified, it’s set to start with start then set to 0.
 * If start is greater than end the params are swapped to support negative ranges.
 *
 * @param number the subject
 * @param start optional the start of the range - defaults to 0
 * @param end the end of the range
 *
 * @example
 * ```ts
 * inRange(3, 10) // => true
 * inRange(10, 10) // => false
 * inRange(-1, 10) // => false
 * inRange(-1, 10, -1) // => true
 * inRange(2, 10, 4) // => false
 * ```
 */
export const inRange = (number: number, end: number, start = 0): boolean =>
  Math.min(start, end) <= number && number < Math.max(start, end);

/**
 * Uniq array items
 */
export const uniq = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Flatten array
 *
 * @example
 * ```ts
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 * ```
 */
export const flatten = <T>(arr: any[]): T[] => [].concat(...arr);

/**
 * Flattens an array and makes the result uniq
 *
 * @example
 * ```ts
 * flattenUniq([1, 2, [1, 2, 3], 1, 4, [1, 4, 2]])
 * // => []
 * ```
 */
export const flattenUniq = pipe(flatten, uniq);

/**
 * Recursively flattens array
 *
 * @example
 * ```ts
 * flattenDeep([1, [[2], [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 * ```
 */
export const flattenDeep = <T>(arr: any[]): T[] =>
  arr.flatMap((subArray) => (Array.isArray(subArray) ? flattenDeep(subArray) : subArray));

/**
 * Recursively flattens array and makes the result uniq
 *
 * @example
 * ```ts
 * flattenDeep([1, 2, [2, [1, 5, 2], [3, [4, 2]], 5, 1]])
 * // => [1, 2, 5, 3, 4]
 * ```
 */
export const flattenDeepUniq = pipe(flattenDeep, uniq);

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

/**
 * Intersection of two or more arrays
 *
 * @description
 * Returns an array that is the intersection of all the arrays.
 * Each value in the result is present in each of the arrays.
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])
 * // => [1, 2]
 * ```
 */
export const intersection = (...arrays: any[][]): any[] =>
  arrays.reduce((a, b) => a.filter((c) => b.includes(c)));

/**
 *
 * @param arr an array of objects
 * @param property the property to group by
 */
export const groupBy = <T>(arr: Record<string, any>[], property: string): { [key: string]: T[] } =>
  arr.reduce(
    (prev, curr, _i, _a, groupKey = curr[property]) => (
      (prev[groupKey] || (prev[groupKey] = [])).push(curr), prev
    ),
    {}
  );

const typedPropGet = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

export const pick = <T, K extends keyof T>(object: T, ...picks: K[]): Pick<T, K> => {
  const result: Partial<T> = {};
  picks.forEach((pick: K) => {
    result[pick] = typedPropGet(object, pick);
  });
  return result as Pick<T, K>;
};

export const keyBy = <T, K extends keyof T>(array: T[], key: K): { [key: string]: T } =>
  (array || []).reduce((prev, curr: T) => ({ ...prev, [`${curr[key]}`]: curr }), {});
