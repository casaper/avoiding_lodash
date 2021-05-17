/**
 * Checks if value is an integer.
 *
 * @param value - the value to test for being an integer
 */
export const isInteger = <T extends unknown>(value: T): boolean =>
  Number.isInteger(value);
