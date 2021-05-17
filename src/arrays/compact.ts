/**
 * Creates an array with all falsy values removed.
 *
 * @param sourceArray - the array to compact
 * @example
 * ```ts
 * [0, 1, false, 2, '', 3].filter(Boolean) // => [1, 2, 3]
 * ```
 */
export const compact = <T>(sourceArray: T[]): T[] =>
  sourceArray.filter(Boolean);
