import { groupAnagrams } from "./group-anagrams";

expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining(argument)])
    );

    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} not to contain object ${this.utils.printExpected(argument)}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} to contain object ${this.utils.printExpected(argument)}`,
        pass: false,
      };
    }
  },
});

test("group anagrams 1", () => {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const output = groupAnagrams(strs).map((o) => o.sort());
  const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]].map((o) =>
    o.sort()
  );

  expect(output).toEqual(expect.arrayContaining(expected));
});

test("group anagrams 2", () => {
  const strs = [""];
  const expected = [[""]];
  expect(groupAnagrams(strs)).toEqual(expected);
});

test("group anagrams 3", () => {
  const strs = ["a"];
  const expected = [["a"]];
  expect(groupAnagrams(strs)).toEqual(expected);
});
