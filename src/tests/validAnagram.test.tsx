import isAnagram from './validAnagram';

describe('Anagram function', () => {
  it('isAnagram function exists', () => {
    expect(isAnagram).toBeDefined();
  });

  it('should return true if strings are an anagrams', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
    expect(isAnagram('cat', 'act')).toBeTruthy();
    expect(isAnagram('state', 'taste')).toBeTruthy();
  });

  it('should return false if strings are not an anagrams', () => {
    expect(isAnagram('saab', 'saad')).toBeFalsy();
    expect(isAnagram('beer', 'bear')).toBeFalsy();
    expect(isAnagram('man', 'men')).toBeFalsy();
  });
});
