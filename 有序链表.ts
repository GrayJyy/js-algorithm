// 1.真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
// 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
type LNode = {
    val: number
    next: LNode | null
}
class ListNode {
    public val: number | null
    public next: LNode | null
    constructor(val: number | null, next: LNode | null) {
        this.val = val
        this.next = next
    }
}

const mergeTwoLists = (l1: LNode | null, l2: LNode | null) => {
    const head = new ListNode(null, null)
    let cur = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = !l1 ? l2 : l1
    return head.next
}
// console.log(mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4, next: null } } }, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));

// 2.真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
/**
 示例 1:
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
 */
const deleteNode = (l: LNode | null) => {
    if (!l) return
    let cur: ListNode = l
    while (cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return l
}
console.log(deleteNode({ val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }));

// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
/**
 示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
 */
const dummy = (l: LNode | null) => {
    if (!l) return
    let prev = new ListNode(null, l)
    let cur = prev
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let val = cur.next.val
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return prev.next
}
console.log(dummy({ val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: { val: 4, next: { val: 4, next: { val: 5, next: null } } } } } } }));
