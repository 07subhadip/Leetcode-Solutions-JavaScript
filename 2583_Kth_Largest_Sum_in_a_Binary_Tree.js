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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const arr = [];
    const q = [root];
    
    while (q.length) {
        let t = 0;
        for (let n = q.length; n > 0; --n) {
            const node = q.shift();
            t += node.val;
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        arr.push(t);
    }
    
    if (arr.length < k) {
        return -1;
    }
    
    arr.sort((a, b) => b - a);
    
    return arr[k - 1];
};
