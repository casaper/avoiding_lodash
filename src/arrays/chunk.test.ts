import { chunk } from './chunk';

test('should be chunked', () => {
  const result = chunk([1, 2, 3, 4], 2);
  expect(result.length).toBe(2);
  expect(result[0]).toEqual([1, 2]);
  expect(result[1]).toEqual([3, 4]);
});
