function intersection(nums1: number[], nums2: number[]): number[] {
  const a = nums1.filter((element) => nums2.includes(element));
  return a.filter((v, i) => a.indexOf(v) === i);
}

export default intersection;
