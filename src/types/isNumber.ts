/**
 * Checks if value is classified as a Number primitive or object.
 *
 * @param subject - the subject
 */
export const isNumber = <T extends unknown>(subject: T): boolean =>
  typeof subject === 'number';
