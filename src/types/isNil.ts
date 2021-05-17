/**
 * Checks if subject is `null` or `undefined`
 *
 * @param subject - the subject to test for nil
 */
export const isNil = <T extends unknown>(subject: T): boolean =>
  subject == null;
