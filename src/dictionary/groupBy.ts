/**
 * Creates an object composed of keys generated from the results
 * of running each element of collection thru iteratee.
 *
 * @param arr an array of objects
 * @param property the property to group by
 */
export const groupBy = <T>(
  arr: Record<string, any>[],
  property: string
): { [key: string]: T[] } =>
  arr.reduce(
    (prev, curr, _i, _a, groupKey = curr[property]) => (
      (prev[groupKey] || (prev[groupKey] = [])).push(curr), prev
    ),
    {}
  );
