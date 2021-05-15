/**
 * Creates a duplicate-free version of an array.
 */
export const uniq = <T>(arr: T[]): T[] => [...new Set(arr)];
