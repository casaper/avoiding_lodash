/**
 * Checks if value is an empty object or collection.
 */
export const isEmpty = (obj?: any): boolean =>
  Boolean(
    [Object, Array].includes((obj || {}).constructor) &&
      !Object.entries(obj || {}).length
  );
