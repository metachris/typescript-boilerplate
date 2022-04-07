import { containsDuplicate } from "./contains-duplicates";

test("contains duplicates", () => {
  const nums = [1, 2, 3, 4, 5, 6];
  const nums2 = [1, 2, 2];
  expect(containsDuplicate(nums)).toEqual(false);
  expect(containsDuplicate(nums2)).toEqual(true);
});
