/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let subarraySums = [];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            subarraySums.push(sum);
        }
    }
    
    subarraySums.sort((a, b) => a - b);
    
    let result = 0;
    const MOD = 1e9 + 7;
    for (let k = left - 1; k < right; k++) {
        result = (result + subarraySums[k]) % MOD;
    }
    
    return result;
};