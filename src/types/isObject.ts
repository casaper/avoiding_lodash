/**
 * Checks if value is instance of Object
 *
 * This test is most often meaningless. In case you intend to know if it is a collection
 * like object {@link isPlainObject}
 *
 * @param subject - the subject
 */
export const isObject = <T extends unknown>(subject: T): boolean =>
  subject instanceof Object;
