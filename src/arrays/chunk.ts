//  TODO: proper working generic type
/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param inputArray the array to make chunks from
 * @param size the size of the chunks
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
 * ```
 */
export const chunk = (inputArray: any[], size: number): any[][] | never => {
  if (size < 1) {
    throw new Error(`size must be >= 1, but it is "${size}"`);
  }
  return inputArray.reduce((collector: any[] = [], item, index: number) =>
    index % size === 0
      ? [...collector, [item]]
      : [...collector.slice(0, -1), [...collector.slice(-1)[0], item]]
  );
};
