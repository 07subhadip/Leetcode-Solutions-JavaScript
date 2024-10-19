/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const dfs = function(n, k) {
        if (k === 1) {
            return 0;
        }
        if ((k & (k - 1)) === 0) {
            return 1;
        }
        const m = 1 << n;
        if (k * 2 < m - 1) {
            return dfs(n - 1, k);
        }
        return dfs(n - 1, m - k) ^ 1;
    };
    
    return dfs(n, k).toString();
};
