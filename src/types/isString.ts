/**
 * Checks if value is string
 *
 * @param subject - the subject
 */
export const isString = <T extends unknown>(subject: T): boolean =>
  typeof subject === 'string';
