/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b); 
    let count = 0;
    let start = nums[0]; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - start > k) {
            count++;
            start = nums[i]; 
        }
    }

    return count + 1;
};