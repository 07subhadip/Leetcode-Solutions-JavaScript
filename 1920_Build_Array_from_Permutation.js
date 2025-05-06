// Solution 1 :  Beats 75.90% users on runtime

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    const ans = []

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }

    return ans
};

// Solution 2 :  Beats 100% users on runtime

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    return nums.map(i => nums[i])
};