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
var minimumOperations = function(root) {
    if (!root) return 0;

    const levels = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        levels.push(currentLevel);
    }

    const minSwapsToSort = (arr) => {
        const n = arr.length;
        const sorted = [...arr].sort((a, b) => a - b);
        const indexMap = new Map();
        for (let i = 0; i < n; i++) {
            indexMap.set(arr[i], i);
        }

        let swaps = 0;
        const visited = new Array(n).fill(false);

        for (let i = 0; i < n; i++) {
            if (visited[i] || arr[i] === sorted[i]) continue;

            let cycleSize = 0;
            let j = i;

            while (!visited[j]) {
                visited[j] = true;
                j = indexMap.get(sorted[j]);
                cycleSize++;
            }

            if (cycleSize > 1) {
                swaps += cycleSize - 1;
            }
        }

        return swaps;
    };

    let totalSwaps = 0;

    for (const level of levels) {
        totalSwaps += minSwapsToSort(level);
    }

    return totalSwaps;
};      