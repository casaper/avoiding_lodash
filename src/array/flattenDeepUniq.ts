import { flattenDeep } from './flattenDeep';
import { uniq } from './uniq';
import { pipe } from '../lib/pipe';

/**
 * Recursively flattens array and makes the result uniq
 *
 * @example
 * ```ts
 * flattenDeep([1, 2, [2, [1, 5, 2], [3, [4, 2]], 5, 1]]) // => [1, 2, 5, 3, 4]
 * ```
 */
export const flattenDeepUniq = pipe(flattenDeep, uniq);
