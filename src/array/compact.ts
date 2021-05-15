/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 */
export const compact = <T>(arr: T[]): T[] => arr.filter(Boolean);
