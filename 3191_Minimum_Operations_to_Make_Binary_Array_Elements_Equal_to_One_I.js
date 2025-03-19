/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;

    if (n < 3) {
        const allOnes = nums.every(num => num === 1);
        return allOnes ? 0 : -1;
    }

    let operations = 0;
    
    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            for (let j = i; j < i + 3; j++) {
                if (j < n) {
                    nums[j] = 1 - nums[j];
                }
            }
            operations++;
        }
    }

    if (nums[n - 2] === 1 && nums[n - 1] === 1) {
        return operations;
    } else {
        return -1;
    }
};