/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    if (k === 0) return 1.0;
    if (n >= k + maxPts - 1) return 1.0;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;
    let windowSum = 1.0;
    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;
        if (i < k) windowSum += dp[i];
        if (i - maxPts >= 0) windowSum -= dp[i - maxPts];
    }
    let result = 0.0;
    for (let i = k; i <= n; i++) result += dp[i];
    return result;
};
