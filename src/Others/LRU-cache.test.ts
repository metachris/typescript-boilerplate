import { LRUCache } from "./LRU-cache";

test("LRU ", () => {
  const cacheCapacity = 2;
  const cache = new LRUCache(cacheCapacity);
  // cache is {}
  expect(cache.capacity).toBe(cacheCapacity);

  cache.put(1, 1);
  // cache is {1=1}
  expect(cache.head.next.value).toBe(1);

  cache.put(2, 2);
  // cache is {2=2,1=1}
  expect(cache.head.next.value).toBe(2);
  expect(cache.head.next.next.value).toBe(1);

  cache.get(1);
  // cache is {1=1, 2=2}
  expect(cache.head.next.value).toBe(1);
  expect(cache.head.next.next.value).toBe(2);

  cache.put(3, 3);
  // cache is {3=3, 1=1}
  expect(cache.head.next.value).toBe(3);
  expect(cache.head.next.next.value).toBe(1);

  const output = cache.get(2);
  //not found
  expect(output).toBe(-1);

  cache.put(4, 4);
  // cache is {4=4, 3=3}
  const output2 = cache.get(1);
  expect(output2).toBe(-1);
  const output3 = cache.get(3);
  expect(output3).toBe(3);
  const output4 = cache.get(4);
  expect(output4).toBe(4);
});
