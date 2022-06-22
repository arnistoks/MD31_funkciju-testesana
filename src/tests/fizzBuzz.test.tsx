import fizzBuzz from './fizzBuzz';

describe('FizzBuzz function', () => {
  test('fizzBuzz function exists', () => {
    expect(fizzBuzz).toBeDefined();
  });

  test('should print out the correct values', () => {
    expect(fizzBuzz(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']);
  });

  test("shouldn't print number on 3", () => {
    expect(fizzBuzz(3)).not.toEqual(['1', '2', '3']);
  });

  test("shouldn't print number on 5", () => {
    expect(fizzBuzz(3)).not.toEqual(['1', '2', 'Fizz', '4', '5']);
  });

  test('should be an array of strings', () => {
    expect(typeof fizzBuzz(1)).toBe('object');
  });
});
