class DoublyLinkedList {
  public key: number;
  public value: number;
  public prev: DoublyLinkedList | null;
  public next: DoublyLinkedList | null;
  constructor(key: number, val: number) {
    this.key = key;
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  capacity: number;
  cache: Record<number, DoublyLinkedList | undefined>;
  head: DoublyLinkedList;
  tail: DoublyLinkedList;
  size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = {};
    this.size = 0;
    this.head = new DoublyLinkedList(0, 0);
    this.tail = new DoublyLinkedList(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  public get = (key: number): number => {
    const node = this.cache[key];
    if (node) {
      this.remove(node);
      this.add(new DoublyLinkedList(node.key, node.value));
      return node.value;
    } else {
      return -1;
    }
  };

  public put = (key: number, value: number): void => {
    let node = this.cache[key];
    if (node !== undefined) {
      node.value = value;
      this.remove(node);
      this.add(node);
    } else {
      node = new DoublyLinkedList(key, value);
      if (this.size === this.capacity && this.tail.prev) {
        this.remove(this.tail.prev);
      }
      this.add(node);
    }
  };

  private add = (node: DoublyLinkedList): void => {
    const headNext = this.head.next;
    this.head.next = node;
    node.next = headNext;
    node.prev = this.head;
    if (headNext !== null) headNext.prev = node;
    this.cache[node.key] = node;
    this.size += 1;
  };

  private remove = (node: DoublyLinkedList): void => {
    const nodePrev = node.prev;
    const nodeNext = node.next;
    if (nodePrev) nodePrev.next = nodeNext;
    if (nodeNext) nodeNext.prev = nodePrev;
    this.size -= 1;
    delete this.cache[node.key];
  };
}
