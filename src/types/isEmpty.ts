/**
 * Checks if value is an empty object or collection.
 *
 * @param value
 */
export const isEmpty = (value?: any): boolean =>
  Boolean(
    [Object, Array].includes((value || {}).constructor) &&
      !Object.entries(value || {}).length
  );
