import { twoSum } from "./two-sum-2";

test("Two sum 1", () => {
  const input1 = [2, 7, 11, 15];
  const input2 = 9;
  const expected = [1, 2];
  const output = twoSum(input1, input2);
  expect(output).toEqual(expected);
});

test("Two sum 2", () => {
  const input1 = [2, 3, 4];
  const input2 = 6;
  const expected = [1, 3];
  const output = twoSum(input1, input2);
  expect(output).toEqual(expected);
});

test("Two sum 3", () => {
  const input1 = [-1, 0];
  const input2 = -1;
  const expected = [1, 2];
  const output = twoSum(input1, input2);
  expect(output).toEqual(expected);
});

test("Two sum 4", () => {
  const input1 = [5, 25, 75];
  const input2 = 100;
  const expected = [2, 3];
  const output = twoSum(input1, input2);
  expect(output).toEqual(expected);
});
