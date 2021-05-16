/**
 * Creates an object composed of the picked object properties.
 *
 * @param object
 * @param {...any} picks
 */
export const pick = <T, K extends keyof T>(
  object: T,
  ...picks: K[]
): Pick<T, K> => {
  const result: Partial<T> = {};
  picks.forEach((pick: K) => {
    result[pick] = typedPropGet(object, pick);
  });
  return result as Pick<T, K>;
};

export const typedPropGet = <T, K extends keyof T>(obj: T, key: K): T[K] =>
  obj[key];
