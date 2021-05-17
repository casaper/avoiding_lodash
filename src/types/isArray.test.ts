import { isArray } from './isArray';

test('an array should return true', () => {
  expect(isArray([1])).toBe(true);
  expect(isArray(Array(1))).toBe(true);
  expect(isArray(new Array(1))).toBe(true);
  expect(isArray(Array.of(1))).toBe(true);
});

test('a non array should return false', () => {
  expect(isArray(undefined)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray('')).toBe(false);
  expect(isArray([].toString())).toBe(false);
  expect(isArray(1)).toBe(false);
  expect(isArray(NaN)).toBe(false);
  expect(isArray(Array)).toBe(false);
});
