/**
 * Checks if value is `null` or `undefined`
 *
 * @param value - the value to test for nil
 */
export const isNil = <T extends unknown>(value: T): boolean => value == null;
