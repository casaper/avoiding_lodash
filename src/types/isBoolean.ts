/**
 * Checks if value is classified as a boolean primitive or object.
 *
 * @param subject - the subject
 */
export const isBoolean = <T extends unknown>(subject: T): boolean =>
  subject === !!subject;
