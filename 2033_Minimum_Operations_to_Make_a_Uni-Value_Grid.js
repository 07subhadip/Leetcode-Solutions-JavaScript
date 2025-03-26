/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    const nums = [];

    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    const start = grid[0][0];
    const rem = start % x;
    nums.push(start);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            const num = grid[i][j];
            const currRem = num % x;

            if (currRem !== rem) {
                return -1;
            }

            nums.push(num);
        }
    }

    nums.sort((a, b) => a - b);

    const midIdx = Math.floor((nums.length - 1) / 2);
    const midVal = nums[midIdx];

    let ops = 0;

    for (const num of nums) {
        ops += Math.abs(num - midVal) / x;
    }

    return ops;
};