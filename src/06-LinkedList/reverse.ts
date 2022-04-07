export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const reverseList = (head: ListNode | null): ListNode | null => {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev; //point backwards
    prev = head;
    head = next;
  }
  return prev;
};
