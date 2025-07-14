/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let num = 0;
    let ptr = head;
    while (ptr !== null) {
        num = (num << 1) | ptr.val;
        ptr = ptr.next;
    }
    return num;
};