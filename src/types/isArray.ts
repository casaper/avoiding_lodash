/**
 * Checks if value is classified as an Array object.
 *
 * @param subject - the subject
 * @example
 * ```ts
 * isArray([]) // => true
 * isArray({}) // => false
 * isArray() // => false
 * ```
 */
export const isArray = <T extends unknown>(subject: T): boolean =>
  Array.isArray(subject);
