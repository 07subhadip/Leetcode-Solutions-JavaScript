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
 * @return {number}
 */
var maxProduct = function (root) {
    const sum = (node) => {
        if (!node) return 0
        return node.val + sum(node.left) + sum(node.right)
    }

    const s = sum(root)
    let ans = 0n
    const total = BigInt(s)

    const dfs = (node) => {
        if (!node) return 0
        const t = node.val + dfs(node.left) + dfs(node.right)
        const currentSum = BigInt(t)
        const product = currentSum * (total - currentSum)
        if (product > ans) ans = product
        return t
    }

    dfs(root)
    return Number(ans % BigInt(1e9 + 7))
};