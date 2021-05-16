/**
 * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
 *
 * @param value
 */
export const isError = (value: any): boolean => value instanceof Error;
