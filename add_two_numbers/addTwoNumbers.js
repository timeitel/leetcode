const l1 = { val: 1, next: null };
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

addTwoNumbers(l1, l2);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const l1Value = getListValue(l1);
  const l2Value = getListValue(l2);

  return toNode(l1Value + l2Value);
}

/**
 * @param {number} value
 */
function toNode(value) {
  const chars = value.toString().split("").reverse();
  let node = {};
  node.val = Number(chars.pop());
  node.next = null;

  while (chars.length > 0) {
    const nextNode = {};
    nextNode.val = Number(chars.pop());
    nextNode.next = node;
    node = nextNode;
  }

  return node;
}

function getListValue(node) {
  let nodeRef = node;
  let remaining = true;
  let value = "";

  while (remaining) {
    value = nodeRef.val + value;

    if (nodeRef.next === null) remaining = false;

    nodeRef = nodeRef.next;
  }

  return Number(value);
}
