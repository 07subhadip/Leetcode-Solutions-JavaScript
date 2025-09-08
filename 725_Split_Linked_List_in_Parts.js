/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let n = 0;
    
    for (let cur = head; cur !== null; cur = cur.next) {
        n++;
    }
    
    const cnt = Math.floor(n / k); 
    const mod = n % k;             
    
    const ans = Array(k).fill(null);
    let cur = head;
    
    for (let i = 0; i < k && cur !== null; i++) {
        ans[i] = cur;
        let m = cnt + (i < mod ? 1 : 0); 
        
        for (let j = 1; j < m; j++) {
            cur = cur.next;
        }
        
        let next = cur.next;
        cur.next = null;
        cur = next;
    }
    
    return ans;
};