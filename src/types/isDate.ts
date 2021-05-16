/**
 * Checks if value is classified as a Date object.
 *
 * @param value
 */
export const isDate = (value: any): boolean =>
  value instanceof Date && !Number.isNaN(value);
