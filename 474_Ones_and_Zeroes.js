/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = {};

    const countZerosOnes = (str) => {
        let zeros = 0, ones = 0;
        for (let char of str) {
            if (char === '0') zeros++;
            else if (char === '1') ones++;
        }
        return [zeros, ones];
    };

    const dfs = (i, m, n) => {
        if (i === strs.length) return 0;

        const key = `${i},${m},${n}`;
        if (key in dp) return dp[key];

        const [mCnt, nCnt] = countZerosOnes(strs[i]);

        let maxForm = dfs(i + 1, m, n);

        if (mCnt <= m && nCnt <= n) {
            maxForm = Math.max(maxForm, 1 + dfs(i + 1, m - mCnt, n - nCnt));
        }

        dp[key] = maxForm;
        return maxForm;
    };

    return dfs(0, m, n);
};