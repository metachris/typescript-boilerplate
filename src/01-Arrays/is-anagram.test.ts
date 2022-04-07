import { isAnagram } from "./is-anagram";

test("is not anagram, (car, rat)", () => {
  const s = "rat";
  const t = "car";
  expect(isAnagram(s, t)).toEqual(false);
});

test("is anagram, (anagram, nagaram)", () => {
  const s = "anagram";
  const t = "nagaram";
  expect(isAnagram(s, t)).toEqual(true);
});
