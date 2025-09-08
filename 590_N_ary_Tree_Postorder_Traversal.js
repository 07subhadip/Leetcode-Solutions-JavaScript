/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const traverse = (node, result) => {
        if (!node) return;  

        for (let child of node.children) {
            traverse(child, result);
        }

        result.push(node.val);
    };

    const result = [];
    traverse(root, result);
    return result;
};