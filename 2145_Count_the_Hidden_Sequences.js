/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let min = 0, max = 0, sum = 0;

    for (let diff of differences) {
        sum += diff;
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }

    return Math.max(0, (upper - lower) - (max - min) + 1);
};