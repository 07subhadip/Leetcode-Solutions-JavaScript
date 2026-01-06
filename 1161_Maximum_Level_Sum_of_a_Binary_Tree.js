/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    let q = [root];
    let i = 0;
    let mx = -Infinity;
    let ans = 0;
    while (q.length) {
        ++i;
        const nq = [];
        let s = 0;
        for (const { val, left, right } of q) {
            s += val;
            left && nq.push(left);
            right && nq.push(right);
        }
        if (mx < s) {
            mx = s;
            ans = i;
        }
        q = nq;
    }
    return ans;
};