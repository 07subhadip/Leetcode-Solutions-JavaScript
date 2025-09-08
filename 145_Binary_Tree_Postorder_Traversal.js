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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        traverse(node.left);

        traverse(node.right);

        result.push(node.val);
    }

    traverse(root);
    return result;
};