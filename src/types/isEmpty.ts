/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks if value is an empty object or collection.
 *
 * @param subject - the subject
 */
export const isEmpty = <T extends unknown>(subject: T): boolean =>
  Boolean(
    [Object, Array].includes(((subject as any) || ({} as any)).constructor) &&
      !Object.entries((subject as any) || ({} as any)).length
  );
