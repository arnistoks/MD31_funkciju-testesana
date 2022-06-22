import intersection from './intersectionOfTwoArrays';

test('intersection function exists', () => {
  expect(intersection).toBeDefined();
});

test('properly intersects two arrays of numbers', () => {
  expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

test('properly intersects empty array and array of numbers', () => {
  expect(intersection([], [2, 3, 4])).toEqual([]);
});

test("don't print number double", () => {
  expect(intersection([2, 2], [2, 2])).toHaveLength(1);
});

test('if only merge arrays', () => {
  expect(intersection([1, 2], [2, 3])).not.toEqual([1, 2, 3]);
});

test('if only concat arrays', () => {
  expect(intersection([1, 2], [2, 3])).not.toEqual([1, 2, 2, 3]);
});
