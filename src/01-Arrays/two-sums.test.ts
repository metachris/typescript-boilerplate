import { twoSum } from "./two-sums";

test("two sum, [2, 7, 11, 15]", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("two sum, [3, 2, 4]", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const expected = [1, 2];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("two sum, [3, 3]", () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];
  expect(twoSum(nums, target)).toEqual(expected);
});
