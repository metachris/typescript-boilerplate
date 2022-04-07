type AnagramMap = {
  [key: string]: string[];
};
export const groupAnagrams = (strs: string[]): string[][] => {
  const map: AnagramMap = {};
  for (let i = 0; i < strs.length; i++) {
    const tmp = [...strs[i]].sort().join("");
    if (map[tmp] === undefined) {
      map[tmp] = [strs[i]];
    } else {
      map[tmp] = [...map[tmp], strs[i]];
    }
  }
  return Object.values(map);
};
