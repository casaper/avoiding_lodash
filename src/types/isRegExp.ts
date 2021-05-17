/**
 * Checks if subject is classified as a `RegExp` object.
 *
 * @param subject - the subject
 */
export const isRegExp = <T extends unknown>(subject: T): boolean =>
  subject instanceof RegExp;
