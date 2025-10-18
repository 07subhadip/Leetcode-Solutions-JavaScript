/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
    nums.sort((a, b) => a - b);
    let lastAssigned = -Infinity;
    let distinctCount = 0;

    for (let num of nums) {
        let minPossible = num - k;
        let maxPossible = num + k;

        let target = lastAssigned + 1;

        if (target <= maxPossible) {
            let actualAssigned = Math.max(target, minPossible);
            if (actualAssigned <= maxPossible) {
                distinctCount++;
                lastAssigned = actualAssigned;
            }
        }
    }

    return distinctCount;
};