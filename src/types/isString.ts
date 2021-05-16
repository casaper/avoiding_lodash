/**
 * Checks if value is classified as a String primitive or object.
 *
 * @param str
 */
export const isString = (str?: any): str is string =>
  str && typeof str.valueOf() === 'string';
