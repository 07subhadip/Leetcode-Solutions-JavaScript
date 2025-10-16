/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
    const count = new Array(value).fill(0);

    for (const num of nums) {
        const residue = ((num % value) + value) % value;
        count[residue]++;
    }

    let mex = 0;
    while (true) {
        const residue = mex % value;
        const needed = Math.floor(mex / value) + 1;

        if (count[residue] < needed) {
            break;
        }
        mex++;
    }

    return mex;
};