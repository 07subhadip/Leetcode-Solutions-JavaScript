/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const total = n * n;
    const freq = new Array(total + 1).fill(0);

    for (let row of grid) {
        for (let num of row) {
            freq[num]++;
        }
    }

    let repeated, missing;
    for (let i = 1; i <= total; i++) {
        if (freq[i] === 2) repeated = i;
        else if (freq[i] === 0) missing = i;
    }

    return [repeated, missing];
};