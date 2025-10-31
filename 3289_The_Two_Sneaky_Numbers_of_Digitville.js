/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const seen = new Set();
    const sneaky = [];

    for (const num of nums) {
        if (seen.has(num)) {
            sneaky.push(num);
            if (sneaky.length === 2) {
                break;
            }
        } else {
            seen.add(num);
        }
    }

    return sneaky;
};