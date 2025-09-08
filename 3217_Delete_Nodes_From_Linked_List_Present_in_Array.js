/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const s = new Set(nums);
    const dummy = new ListNode(0, head);
    let pre = dummy;
    
    while (pre.next) {
        if (s.has(pre.next.val)) {
            pre.next = pre.next.next;
        } else {
            pre = pre.next;
        }
    }
    
    return dummy.next;
};