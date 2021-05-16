/**
 * Checks if n is between start and up to, but not including, end.
 *
 * If end is not specified, it’s set to start with start then set to 0.
 * If start is greater than end the params are swapped to support negative ranges.
 *
 * @param number the subject
 * @param start optional the start of the range - defaults to 0
 * @param end the end of the range
 *
 * @example
 * ```ts
 * inRange(3, 10) // => true
 * inRange(10, 10) // => false
 * inRange(-1, 10) // => false
 * inRange(-1, 10, -1) // => true
 * inRange(2, 10, 4) // => false
 * ```
 */
export const inRange = (number: number, end: number, start = 0): boolean =>
  Math.min(start, end) <= number && number < Math.max(start, end);
