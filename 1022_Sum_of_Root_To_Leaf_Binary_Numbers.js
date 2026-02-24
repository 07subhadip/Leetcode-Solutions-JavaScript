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
var sumRootToLeaf = function (root) {
    const dfs = (node, x) => {
        if (node === null) {
            return 0;
        }

        x = (x << 1) | node.val;

        if (node.left === null && node.right === null) {
            return x;
        }

        return dfs(node.left, x) + dfs(node.right, x);
    };

    return dfs(root, 0);
};
