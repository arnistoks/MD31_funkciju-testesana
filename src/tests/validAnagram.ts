function isAnagram(s: string, t: string): boolean {
  const c = s.split('').sort().join('');
  const d = t.split('').sort().join('');
  return c === d;
}

export default isAnagram;
