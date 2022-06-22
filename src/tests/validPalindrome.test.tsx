import validPalindrome from './validPalindrome';

test('validPalindrome function exists', () => {
  expect(validPalindrome).toBeDefined();
});

test('if word is palindrome', () => {
  const response = validPalindrome('racecar');

  expect(response).toBeTruthy();
});

test('if word is not palindrome', () => {
  const response = validPalindrome('beer');

  expect(response).toBeFalsy();
});

test('if some letter is in upper case', () => {
  const response = validPalindrome('Saippuakivikauppias');

  expect(response).toBeTruthy();
});

test('if word is with punctuation marks', () => {
  const response = validPalindrome('radar!!!');

  expect(response).toBeTruthy();
});

test('if word is with numbers', () => {
  const response = validPalindrome('N00N');

  expect(response).toBeTruthy();
});
