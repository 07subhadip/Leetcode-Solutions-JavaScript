/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
    const n = weights.length;

    if (k === 1) return 0;

    const diffs = [];

    for (let i = 0; i < n - 1; i++) {
        diffs.push(weights[i] + weights[i + 1]);
    }

    diffs.sort((a, b) => a - b);

    let minSum = 0, maxSum = 0;
    const cuts = k - 1;

    for (let i = 0; i < cuts; i++) {
        minSum += diffs[i];
        maxSum += diffs[diffs.length - 1 - i];
    }

    return maxSum - minSum;
};