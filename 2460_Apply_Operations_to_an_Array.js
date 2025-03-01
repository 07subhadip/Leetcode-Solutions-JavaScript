/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let result = [];
    for (let num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }
    while (result.length < n) {
        result.push(0);
    }
    return result;
};