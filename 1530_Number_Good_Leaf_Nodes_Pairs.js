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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let count = 0;
    
    const helper = (node, distance) => {
        if (!node) return [];
        
        if (!node.left && !node.right) return [1];
        
        let leftDistances = helper(node.left, distance);
        let rightDistances = helper(node.right, distance);
        
        for (let ld of leftDistances) {
            for (let rd of rightDistances) {
                if (ld + rd <= distance) {
                    count++;
                }
            }
        }
        
        let distances = [];
        for (let ld of leftDistances) {
            if (ld + 1 < distance) {
                distances.push(ld + 1);
            }
        }
        for (let rd of rightDistances) {
            if (rd + 1 < distance) {
                distances.push(rd + 1);
            }
        }
        
        return distances;
    };
    
    helper(root, distance);
    return count;
};