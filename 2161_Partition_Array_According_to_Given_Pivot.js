/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const less = [], equal = [], greater = []

    for (const x of nums) {
        x > pivot ? greater.push(x) : x < pivot ? less.push(x) : equal.push(x)
    }

    return [...less, ...equal, ...greater]
};