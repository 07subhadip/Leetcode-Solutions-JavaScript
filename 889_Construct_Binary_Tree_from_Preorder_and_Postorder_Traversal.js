/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let preIndex = 0;
    
    const build = (l, r) => {
        if (l > r) return null;
        let root = new TreeNode(preorder[preIndex++]);
        if (l === r) return root;
        
        let leftVal = preorder[preIndex];
        let pos = postorder.indexOf(leftVal, l);
        
        root.left = build(l, pos);
        root.right = build(pos + 1, r - 1);
        return root;
    };
    
    return build(0, postorder.length - 1);
};