/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function (prices, strategy, k) {
    const n = prices.length;
    const s = Array(n + 1).fill(0);
    const t = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        const a = prices[i - 1];
        const b = strategy[i - 1];
        s[i] = s[i - 1] + a * b;
        t[i] = t[i - 1] + a;
    }

    let ans = s[n];
    for (let i = k; i <= n; i++) {
        const val = s[n] - (s[i] - s[i - k]) + (t[i] - t[i - Math.floor(k / 2)]);
        ans = Math.max(ans, val);
    }
    return ans;
};