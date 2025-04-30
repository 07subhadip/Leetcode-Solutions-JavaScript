/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    
    for (let num of nums) {
        if (Math.floor(Math.log10(num)) % 2 === 1) {
            count++;
        }
    }

    return count
};