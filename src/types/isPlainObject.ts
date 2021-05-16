/**
 * Checks if value is dictionarry like object
 *
 * @param value
 */
export const isPlainObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === '[object Object]';
