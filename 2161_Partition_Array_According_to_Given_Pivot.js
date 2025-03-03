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

// 2nd Solution (Extended of 1st Solution)
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const less = [];
    const equal = [];
    const greater = [];

    for (let num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return [...less, ...equal, ...greater];
};