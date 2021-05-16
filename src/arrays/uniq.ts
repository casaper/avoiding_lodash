/**
 * Creates a duplicate-free version of an array.
 *
 * @param arr
 */
export const uniq = <T>(arr: T[]): T[] => [...new Set(arr)];
