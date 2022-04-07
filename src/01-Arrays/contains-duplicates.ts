/**
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 */

export const containsDuplicate = (nums: number[]): boolean => {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
