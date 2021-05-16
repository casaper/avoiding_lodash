/**
 * Checks if is a floating point number
 *
 * @param num
 */
export const isFloat = (num: any): boolean =>
  Number.isFinite(num) && !Number.isInteger(num);
