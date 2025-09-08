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
var largestValues = function(root) {
    if (!root) return [];
    
    const queue = [root];
    const result = [];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let maxVal = -Infinity;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            maxVal = Math.max(maxVal, node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(maxVal);
    }
    
    return result;
};