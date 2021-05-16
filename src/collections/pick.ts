/**
 * Type aware pick of single collection property
 *
 * @param collection - the collection
 * @param key - the key to pick
 */
export const typedPropGet = <
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T
>(
    collection: T,
    key: K
  ): T[K] => collection[key];

/**
 * Creates an object composed of the picked object properties.
 *
 * @description
 * Editor is aware of the available keys of the object picking from and
 * the resulting object keeps the types.
 * This of course only works if collection comes with types or types can be
 * infered.
 * @param collection - the collection to pick attributes from
 * @param picks - the attributes to pick
 * @example
 * ```ts
 * const coll = { a: 'a', c: /a/, d: 1, g: null, h: new Date(), i: 1n };
 * const res = pick(coll, 'a', 'c', 'd', 'i', 'h');
 * ```
 */
export const pick = <
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T
>(
    collection: T,
    ...picks: K[]
  ): Pick<T, K> => {
  const result: Partial<Pick<T, K>> = {};
  picks.forEach((pickItem: K) => {
    result[pickItem] = typedPropGet(collection, pickItem);
  });
  return result as Pick<T, K>;
};
