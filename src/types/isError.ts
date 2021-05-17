/**
 * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
 *
 * @param value - the value to test for being an extend of Error
 */
export const isError = <T extends unknown>(value: T): boolean =>
  value instanceof Error;
