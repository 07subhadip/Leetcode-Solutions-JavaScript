/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    const m = str1.length, n = str2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = m, j = n;
    const res = [];
    while (i > 0 || j > 0) {
        if (i === 0) {
            res.push(str2[--j]);
        } else if (j === 0) {
            res.push(str1[--i]);
        } else {
            if (str1[i - 1] === str2[j - 1]) {
                res.push(str1[--i]);
                j--;
            } else if (dp[i - 1][j] >= dp[i][j - 1]) {
                res.push(str1[--i]);
            } else {
                res.push(str2[--j]);
            }
        }
    }

    return res.reverse().join('');
};