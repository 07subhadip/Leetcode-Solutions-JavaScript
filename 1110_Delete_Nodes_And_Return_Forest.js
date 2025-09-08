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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const forest = [];
    
    function dfs(node) {
        if (!node) return null;
        
        node.left = dfs(node.left);
        node.right = dfs(node.right);
        
        if (toDeleteSet.has(node.val)) {
            if (node.left) forest.push(node.left);
            if (node.right) forest.push(node.right);
            return null;
        }
        
        return node;
    }
    
    if (dfs(root) !== null) {
        forest.push(root);
    }
    
    return forest;
};