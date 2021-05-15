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
