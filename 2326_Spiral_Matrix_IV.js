/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const ans = Array.from({ length: m }, () => Array(n).fill(-1));
    const dirs = [0, 1, 0, -1, 0];
    let i = 0, j = 0, k = 0;

    while (true) {
        ans[i][j] = head.val;
        head = head.next;
        if (!head) {
            break;
        }
        while (true) {
            const x = i + dirs[k];
            const y = j + dirs[k + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && ans[x][y] === -1) {
                i = x;
                j = y;
                break;
            }
            k = (k + 1) % 4;
        }
    }

    return ans;
};