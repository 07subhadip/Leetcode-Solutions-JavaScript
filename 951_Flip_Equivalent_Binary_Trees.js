/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    return dfs(root1, root2);
};

var dfs = function(root1, root2) {
    if (root1 === root2 || (!root1 && !root2)) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
    return (dfs(root1.left, root2.left) && dfs(root1.right, root2.right)) || 
           (dfs(root1.left, root2.right) && dfs(root1.right, root2.left));
};
