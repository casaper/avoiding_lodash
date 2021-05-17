/**
 * Checks if value is classified as a Date object.
 *
 * @param subject - the subject
 */
export const isDate = <T extends unknown>(subject: T): boolean =>
  subject instanceof Date && !Number.isNaN(subject);
