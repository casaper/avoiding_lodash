/**
 * Creates a new `array` concatenating `array` with any additional `arrays` and/or values.
 *
 * Use of this function mainly makes sense when used as part of a composed or piped function.
 *
 * @param sourceArray - the array to get elements added
 * @param elements - n elements to add to the array
 * @example
 * ```ts
 * concat([1], 2, 3); // => [1, 2, 3]
 * const addVar = [2, 3]
 * concat([1], ...addVar); // => [1, 2, 3]
 * ```
 */
export const concat = <T>(sourceArray: T[], ...elements: T[]): T[] =>
  sourceArray.concat(...elements);
