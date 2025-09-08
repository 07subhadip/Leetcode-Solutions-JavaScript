/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    const n = arr.length;
    let index = new Map();
    for (let i = 0; i < n; i++) {
        index.set(arr[i], i);
    }

    let dp = Array.from({ length: n }, () => new Array(n).fill(2));
    let maxLen = 0;

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            let potential = arr[j] - arr[i];
            if (index.has(potential)) {
                let k = index.get(potential);
                if (k < i) {
                    dp[i][j] = dp[k][i] + 1;
                    maxLen = Math.max(maxLen, dp[i][j]);
                }
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
};