import { isPalindrome } from "./valid-palindrome";

test("Valid palindrome", () => {
  const input = "A man, a plan, a canal: Panama";
  const expected = true;
  const output = isPalindrome(input);
  expect(output).toEqual(expected);
});

test("Valid palindrome 2", () => {
  const input = "race a car";
  const expected = false;
  const output = isPalindrome(input);
  expect(output).toEqual(expected);
});

test("Valid palindrome 3", () => {
  const input = " ";
  const expected = true;
  const output = isPalindrome(input);
  expect(output).toEqual(expected);
});

test("Valid palindrome 4", () => {
  const input = "ab_a";
  const expected = true;
  const output = isPalindrome(input);
  expect(output).toEqual(expected);
});

test("Valid palindrome 5", () => {
  const input = "0P";
  const expected = false;
  const output = isPalindrome(input);
  expect(output).toEqual(expected);
});
