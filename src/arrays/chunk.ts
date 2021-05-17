//  TODO: proper working generic type

export class ChunkSizeError extends Error {}

/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param inputArray - the array to make chunks from
 * @param size - the size of the chunks
 * @throws {@link ChunkSizeError}
 * This exception is thrown when the size is less than 1.
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
 * ```
 */
export const chunk = <T extends unknown>(
  inputArray: T[],
  size: number
): T[][] => {
  return inputArray.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, [] as T[][]);
};
