/**
 * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
 */
export const isError = (value: any): boolean => value instanceof Error;
