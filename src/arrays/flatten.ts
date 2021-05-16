/**
 * Flattens `array` a single level deep.
 *
 * @param array the array to flatten
 * @example
 * ```ts
 * flatten([1, [2, 3], 4, [5, [[6], 7]]]) // => [1, 2, 3, 4, 5, [[6], 7]]
 * ```
 */
export const flatten = (array: any[]) =>
  array.reduce((previous, current) => previous.concat(current), []);
