/**
 * Creates a new `array` concatenating `array` with any additional `arrays` and/or values.
 *
 * @param sourceArray the array to get elements added
 * @param elements
 * @description
 * Use of this function mainly makes sense when used as part of a composed or piped function.
 * @example
 * ```ts
 * concat([1], 2, 3); // => [1, 2, 3]
 * ```
 */
export const concat = <T>(sourceArray: T[], ...elements: T[]): T[] =>
  sourceArray.concat(...elements);
