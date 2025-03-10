class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if(head === null) return null;

  const swapHead = (curHead: ListNode | null): ListNode | null => {
    if(curHead === null || curHead.next === null) return curHead;

    const headNode = curHead;
    const secondNode = curHead.next;
    headNode.next = swapHead(secondNode.next);
    secondNode.next = headNode;
    return secondNode;
  }

  return swapHead(head);
};