/**
 * Checks if value is a BigInt.
 *
 * @param subject - the subject
 */
export const isBigInt = <T extends unknown>(subject: T): boolean =>
  typeof subject === 'bigint';
