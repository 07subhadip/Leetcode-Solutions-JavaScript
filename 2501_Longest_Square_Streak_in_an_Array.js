/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    const set = new Set(nums);
    let ans = -1;
    
    for (let v of nums) {
        let count = 0;
        let x = v;
        
        while (set.has(x)) {
            x *= x;
            count++;
        }
        
        if (count > 1) ans = Math.max(ans, count);
    }
    
    return ans;
};