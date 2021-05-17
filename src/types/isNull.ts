/**
 * Checks if value is `null`.
 *
 * @param subject - the value to test for `null`
 */
export const isNull = <T extends unknown>(subject: T): boolean =>
  subject === null;
