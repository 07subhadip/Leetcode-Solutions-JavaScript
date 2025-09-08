/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max_sum = 0, current_sum = 0

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > nums[i-1]){
            current_sum += nums[i]
        }else{
            current_sum = nums[i]
        }

        max_sum = Math.max(current_sum, max_sum)
    }

    return max_sum
};