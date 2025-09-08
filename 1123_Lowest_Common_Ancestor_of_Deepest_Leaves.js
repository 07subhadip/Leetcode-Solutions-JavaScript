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
var lcaDeepestLeaves = function (root) {
    const dfs = (node) => {
        if (!node) return [null, 0];

        const [leftLCA, leftDepth] = dfs(node.left);
        const [rightLCA, rightDepth] = dfs(node.right);

        if (leftDepth > rightDepth) {
            return [leftLCA, leftDepth + 1];
        } else if (leftDepth < rightDepth) {
            return [rightLCA, rightDepth + 1];
        } else {
            return [node, leftDepth + 1];
        }
    }

    return dfs(root)[0];
};