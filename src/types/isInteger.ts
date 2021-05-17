/**
 * Checks if value is an integer.
 *
 * @param subject - the subject to test for being an integer
 */
export const isInteger = <T extends unknown>(subject: T): boolean =>
  Number.isInteger(subject);
