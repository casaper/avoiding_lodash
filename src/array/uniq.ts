/**
 * Uniq array items
 */
export const uniq = <T>(arr: T[]): T[] => [...new Set(arr)];
