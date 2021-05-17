/**
 * Checks if value is classified as a Function object.
 *
 * @param subject - the function or not
 */
export const isFunction = <T extends unknown>(subject: T): boolean =>
  typeof subject === 'function';
