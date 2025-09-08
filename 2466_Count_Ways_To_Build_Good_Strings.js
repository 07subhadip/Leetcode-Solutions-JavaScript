/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const mod = 1e9 + 7;
    const memo = Array(high + 1).fill(-1);

    const dfs = (i) => {
        if (i > high) return 0;
        if (memo[i] !== -1) return memo[i];

        let count = i >= low && i <= high ? 1 : 0;

        count += dfs(i + zero) + dfs(i + one);
        count %= mod;

        memo[i] = count;
        return count;
    };

    return dfs(0); 
};