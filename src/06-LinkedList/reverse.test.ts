import ListNode, { reverseList } from "./reverse";

test("Reverse Linked List", () => {
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );
  const reversedNode = new ListNode(
    5,
    new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
  );
  const reversed = reverseList(node);

  expect(reversed).toEqual(reversedNode);
});
