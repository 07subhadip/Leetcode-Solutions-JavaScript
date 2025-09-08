/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
    let allEven = 0, allOdd = 0;
    let prevEven = 0, prevOdd = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            allEven++;
            prevEven = prevOdd + 1;
        } else {
            allOdd++;
            prevOdd = prevEven + 1;
        }
    }

    return Math.max(allEven, allOdd, prevEven, prevOdd);
};