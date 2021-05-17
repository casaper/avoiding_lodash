/**
 * Checks if value is undefined.
 *
 * @param subject - the subject
 */
export const isUndefined = <T extends unknown>(subject: T): boolean =>
  subject === undefined;
