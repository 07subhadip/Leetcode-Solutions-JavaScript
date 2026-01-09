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
var subtreeWithAllDeepest = function (root) {
    function dfs(node) {
        if (!node) return [null, 0];

        const [leftNode, leftDepth] = dfs(node.left);
        const [rightNode, rightDepth] = dfs(node.right);

        if (leftDepth > rightDepth) {
            return [leftNode, leftDepth + 1];
        } else if (rightDepth > leftDepth) {
            return [rightNode, rightDepth + 1];
        } else {
            return [node, leftDepth + 1];
        }
    }

    return dfs(root)[0];
};