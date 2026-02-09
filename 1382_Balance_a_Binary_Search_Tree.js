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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    const nums = [];
    const dfs = (root) => {
        if (root == null) {
            return;
        }
        dfs(root.left);
        nums.push(root.val);
        dfs(root.right);
    };
    const build = (i, j) => {
        if (i > j) {
            return null;
        }
        const mid = (i + j) >> 1;
        const left = build(i, mid - 1);
        const right = build(mid + 1, j);
        return new TreeNode(nums[mid], left, right);
    };
    dfs(root);
    return build(0, nums.length - 1);
};
