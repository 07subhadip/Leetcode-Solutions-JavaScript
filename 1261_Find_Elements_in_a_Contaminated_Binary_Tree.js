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
 */
var FindElements = function (root) {
    this.vals = new Set();
    if (root === null) return;

    root.val = 0;
    this.vals.add(0);

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        const x = node.val;

        if (node.left !== null) {
            node.left.val = 2 * x + 1;
            this.vals.add(node.left.val);
            queue.push(node.left);
        }
        if (node.right !== null) {
            node.right.val = 2 * x + 2;
            this.vals.add(node.right.val);
            queue.push(node.right);
        }
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.vals.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */