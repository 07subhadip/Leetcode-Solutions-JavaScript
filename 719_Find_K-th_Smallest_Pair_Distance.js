/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = nums[nums.length - 1] - nums[0];
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        let count = 0;
        let start = 0;
        for (let i = 0; i < nums.length; i++) {
            while (start < nums.length && nums[i] - nums[start] > mid) {
                start++;
            }
            count += i - start;
        }
        
        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;  
};