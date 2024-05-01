package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1, l2 *ListNode) *ListNode {
	node := ListNode{}
	ref := &node
	carry := 0

	for {
		sum := carry

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		carry = int(sum / 10)
		ref.Next = &ListNode{Val: sum % 10}
		ref = ref.Next

		if l1 == nil && l2 == nil {
			break
		}
	}

	if carry > 0 {
		ref.Next = &ListNode{carry, nil}
	}

	return node.Next
}
