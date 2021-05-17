/**
 * Checks if value is dictionarry like object
 *
 * @param subject - the subject
 */
export const isPlainObject = <T extends unknown>(subject: T): boolean =>
  Object.prototype.toString.call(subject) === '[object Object]';
