/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let counter = 0

    for (let num of nums) {
        if (num % 3 > 0) {
            counter++
        }
    }

    return counter
};