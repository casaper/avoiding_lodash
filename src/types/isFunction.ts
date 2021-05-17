/**
 * Checks if value is classified as a Function object.
 *
 * @param func - the function or not
 */
export const isFunction = <T extends unknown>(func?: T): boolean =>
  Boolean(func) && typeof func === 'function';
