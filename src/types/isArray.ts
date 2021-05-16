/**
 * Checks if value is classified as an Array object.
 *
 * @param value - the subject
 * @example
 * ```ts
 * isArray([]) // => true
 * isArray({}) // => false
 * isArray() // => false
 * ```
 */
export const isArray = (value: any): boolean => Array.isArray(value);
