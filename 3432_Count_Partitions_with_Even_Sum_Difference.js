/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    const total = nums.reduce((acc, val) => acc + val, 0);
    return total % 2 === 0 ? nums.length - 1 : 0;
};


// Solution 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }

    if (totalSum % 2 !== 0) {
        return 0;
    }

    return nums.length - 1;
};