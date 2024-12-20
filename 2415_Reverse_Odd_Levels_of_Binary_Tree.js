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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    const q = [root];
    for (let i = 0; q.length > 0; ++i) {
        if (i % 2) {
            for (let l = 0, r = q.length - 1; l < r; ++l, --r) {
                [q[l].val, q[r].val] = [q[r].val, q[l].val];
            }
        }
        const nq = [];
        for (const node of q) {
            const { left, right } = node;
            if (left) {
                nq.push(left);
                nq.push(right);
            }
        }
        q.splice(0, q.length, ...nq);
    }
    return root;
};