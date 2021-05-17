/**
 * Checks if is a floating point number
 *
 * @param value - the value to test for being a float
 */
export const isFloat = <T extends unknown>(value: T): boolean =>
  Number.isFinite(value) && !Number.isInteger(value);
