// Solution 1 : Beats 100% users on Runtime

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    const n = nums.length
    if(n <= 1) return n === 1

    for(let i = 0; i < n-1 ; i++){
        if((nums[i] & 1) === (nums[i+1] & 1)){
            return false
        }
    }
    return true
};

// Solution 2 : Beats 23.72% users on Runtime

const checkParity = (num)=>{
    return num % 2 === 0
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length === 0) return false
    if(nums.length === 1) return true

    const n =  nums.length 

    for(let i = 0 ; i < n-1 ; i++){
        if(checkParity(nums[i]) === checkParity(nums[i+1])){
            return false
        }else{
            continue
        }
    }
    return true
};