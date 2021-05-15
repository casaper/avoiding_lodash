/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 */
export const concat = <T>(arr: T[], ...elements: T[]): T[] =>
  arr.concat(...elements);
