/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let [a, b, c] = [nums[0], 100, 100];
    for (const x of nums.slice(1)) {
        if (x < b) {
            [b, c] = [x, b];
        } else if (x < c) {
            c = x;
        }
    }
    return a + b + c;
};