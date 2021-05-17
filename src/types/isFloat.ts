/**
 * Checks if is a float
 *
 * @param subject - the subject to test for being a float
 */
export const isFloat = <T extends unknown>(subject: T): boolean =>
  Number.isFinite(subject) && !Number.isInteger(subject);
