/**
 * Checks if value is dictionarry like object
 */
export const isPlainObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === '[object Object]';