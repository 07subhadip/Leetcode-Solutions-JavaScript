/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const frequencyMap = new Map();
    
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    nums.sort((a, b) => {
        if (frequencyMap.get(a) === frequencyMap.get(b)) {
            return b - a;
        }
        return frequencyMap.get(a) - frequencyMap.get(b);
    });

    return nums;
};