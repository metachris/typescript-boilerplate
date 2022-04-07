type charMap = {
  [key: string]: number;
};

export const isAnagram = (s: string, t: string): boolean => {
  if (t.length !== s.length) return false;
  const map: charMap = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
