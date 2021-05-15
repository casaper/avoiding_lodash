import { flatten } from './flatten';
import { uniq } from './uniq';
import { pipe } from './pipe';

/**
 * Flattens an array and makes the result uniq
 *
 * @example
 * ```ts
 * flattenUniq([1, 2, [1, 2, 3], 1, 4, [1, 4, 2]])
 * // => []
 * ```
 */
export const flattenUniq = pipe(flatten, uniq);
