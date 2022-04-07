type DeltaMap = {
  [key: number]: number;
};
export const twoSum = (nums: number[], target: number): number[] => {
  const map: DeltaMap = {};
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i];
    if (map[delta] !== undefined) {
      return [map[delta], i];
    }
    map[nums[i]] = i;
  }
  return [-1, -1];
};
