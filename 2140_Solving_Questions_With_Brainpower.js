/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const pt = questions[i][0];
        const bp = questions[i][1];

        const nxtIdx = i + bp + 1;
        const solvePts = pt + (nxtIdx < n ? dp[nxtIdx] : 0);

        const skipPts = dp[i + 1];

        dp[i] = Math.max(solvePts, skipPts);
    }

    return dp[0];
};