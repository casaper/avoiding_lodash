/**
 * Checks if value is classified as a Function object.
 *
 * @param func
 */
export const isFunction = (func?: any): boolean =>
  func && typeof func === 'function';
