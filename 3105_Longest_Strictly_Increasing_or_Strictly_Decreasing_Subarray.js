/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let max_len = 1, current_inc = 1, current_dec = 1

    for(let i = 1; i <  nums.length ; i++){
        if(nums[i] > nums[i-1]){
            current_inc++
            current_dec = 1
        }else if(nums[i] < nums[i-1]){
            current_dec++
            current_inc = 1
        }else{
            current_inc = 1
            current_dec = 1
        }
        max_len = Math.max(current_inc,current_dec,max_len)
    }
    return max_len
};