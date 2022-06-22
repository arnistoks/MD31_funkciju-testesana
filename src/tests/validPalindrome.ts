function isPalindrome(s: string): boolean {
  const a = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return a === a.split('').reverse().join('');
}

export default isPalindrome;
