/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    const n = values.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let len = 2; len < n; ++len) { // len = j - i
        for (let i = 0; i + len < n; ++i) {
            const j = i + len;
            let best = Number.POSITIVE_INFINITY;
            for (let k = i + 1; k <= j - 1; ++k) {
                const cost = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
                if (cost < best) best = cost;
            }
            dp[i][j] = (best === Number.POSITIVE_INFINITY) ? 0 : best;
        }
    }

    return dp[0][n - 1];
};