/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    const depthMap = new Map();

    const calculateDepth = (node) => {
        if (!node) return 0;
        const leftDepth = calculateDepth(node.left);
        const rightDepth = calculateDepth(node.right);
        depthMap.set(node, 1 + Math.max(leftDepth, rightDepth));
        return depthMap.get(node);
    };
    calculateDepth(root);

    const result = Array(depthMap.size + 1).fill(0);

    const dfs = (node, depth, rest) => {
        if (!node) return;
        depth += 1;
        result[node.val] = rest;
        dfs(node.left, depth, Math.max(rest, depth + (depthMap.get(node.right) || 0)));
        dfs(node.right, depth, Math.max(rest, depth + (depthMap.get(node.left) || 0)));
    };
    dfs(root, -1, 0);

    return queries.map(val => result[val]);
};
