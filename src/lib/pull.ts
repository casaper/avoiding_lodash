/**
 * Returns array containing elements of sourceArray not given in removeList
 *
 * @param sourceArray - the array to pull from
 * @param removeList - the items to pull
 * @example
 * ```ts
 * pull([1, 2, 3, 4], 2, 3, 5); // => [1, 4]
 * // pull an array as parameters
 * const toPull = ['a', 'c', 'x'];
 * pull(['a', 'b', 'c', 'd'], ...toPull); // => ['b', 'd']
 * ```
 */
export const pull = <T extends unknown>(
  sourceArray: T[],
  ...removeList: T[]
): T[] => {
  const removeSet = new Set(removeList);
  return sourceArray.filter((el) => !removeSet.has(el));
};
