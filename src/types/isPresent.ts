import { isArray } from './isArray';
import { isEmpty } from './isEmpty';
import { isPlainObject } from './isPlainObject';
import { isString } from './isString';

/**
 * Checks if subject is not blank
 *
 * Returns false if subject is:
 *
 * - `undefined`
 * - `null`
 * - `false`
 * - empty `string` - `''`
 * - empty `array` - `[]`
 * - empty `Object` - `{}`
 * - `0`
 * - `NaN`
 *
 * @param subject - the subject
 */
export const isPresent = <T extends unknown>(subject: T): boolean => {
  if (isString(subject) || isArray(subject)) {
    return Boolean((subject as unknown[]).length);
  }
  if (isPlainObject(subject)) {
    return !isEmpty(subject);
  }
  return Boolean(subject);
};

/**
 * Checks if subject is blank
 *
 * Returns true if subject is:
 *
 * - `undefined`
 * - `null`
 * - `false`
 * - empty `string` - `''`
 * - empty `array` - `[]`
 * - empty `Object` - `{}`
 * - `0`
 * - `NaN`
 *
 * @param subject - the subject
 */
export const isBlank = <T extends unknown>(subject: T): boolean =>
  !isPresent(subject);
