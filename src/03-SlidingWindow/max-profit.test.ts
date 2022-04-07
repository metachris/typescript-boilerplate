import { maxProfit } from "./max-profit";

test("Max profit 1", () => {
  const input = [7, 1, 5, 3, 6, 4];
  const expected = 5;
  const output = maxProfit(input);
  expect(output).toEqual(expected);
});

test("Max profit 2", () => {
  const input = [7, 6, 4, 3, 1];
  const expected = 0;
  const output = maxProfit(input);
  expect(output).toEqual(expected);
});

test("Max profit 3", () => {
  const input = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];
  const expected = 9;
  const output = maxProfit(input);
  expect(output).toEqual(expected);
});
