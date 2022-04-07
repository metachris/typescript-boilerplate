export const isPalindrome = (s: string): boolean => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let right = s.length - 1;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (left === right) return true;
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
