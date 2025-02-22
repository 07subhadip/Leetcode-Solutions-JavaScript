/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let index = 0;
    const n = traversal.length;
    const stack = [];

    while (index < n) {
        let level = 0;
        while (index < n && traversal[index] === '-') {
            level++;
            index++;
        }

        let start = index;
        while (index < n && /\d/.test(traversal[index])) {
            index++;
        }
        const val = parseInt(traversal.substring(start, index));
        const node = new TreeNode(val);

        while (stack.length > level) {
            stack.pop();
        }

        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
};