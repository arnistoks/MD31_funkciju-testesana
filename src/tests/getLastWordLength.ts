function lengthOfLastWord(s: string): number {
  const a = s.trim().split(' ');
  return a[a.length - 1].split('').length;
}

export default lengthOfLastWord;
