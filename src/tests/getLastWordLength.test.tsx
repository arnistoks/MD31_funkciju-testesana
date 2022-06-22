import getLastWordLength from './getLastWordLength';

test('getLastWordLength function exists', () => {
  expect(getLastWordLength).toBeDefined();
});

test('if word length is four', () => {
  const response = getLastWordLength('hello from mars');

  expect(response).toBe(4);
});

test('if after last word are spaces', () => {
  const response = getLastWordLength('there are extra spaces  ');

  expect(response).not.toBe(8);
});

test('if punctuations are in count', () => {
  const response = getLastWordLength('have a nice day!');

  expect(response).toBe(4);
});

test('if apostrophe are in count', () => {
  const response = getLastWordLength("if I don't");

  expect(response).toBe(5);
});

test('if dash are in count', () => {
  const response = getLastWordLength('I like ice-cream');

  expect(response).toBe(9);
});
