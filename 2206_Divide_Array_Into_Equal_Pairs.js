/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const frequencyMap = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    for (const frequency of frequencyMap.values()) {
        if (frequency % 2 !== 0) {
            return false;
        }
    }

    return true;
};