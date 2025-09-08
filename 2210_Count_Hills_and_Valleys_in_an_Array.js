/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let ans = 0;
    for (let i = 1, j = 0; i < nums.length - 1; ++i) {
        if (nums[i] === nums[i + 1]) {
            continue;
        }
        if (nums[i] > nums[j] && nums[i] > nums[i + 1]) {
            ans++;
        }
        if (nums[i] < nums[j] && nums[i] < nums[i + 1]) {
            ans++;
        }
        j = i;
    }
    return ans;
};