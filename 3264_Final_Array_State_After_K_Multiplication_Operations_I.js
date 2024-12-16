/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i = 0 ; i < k ; i++){
        let index = nums.indexOf( Math.min(...nums))
        let val = nums[index] * multiplier
        nums.splice(index,1,val)
    }

    return nums
};