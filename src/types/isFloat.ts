/**
 * Checks if is a floating point number
 */
export const isFloat = (num: any): boolean =>
  Number.isFinite(num) && !Number.isInteger(num);
