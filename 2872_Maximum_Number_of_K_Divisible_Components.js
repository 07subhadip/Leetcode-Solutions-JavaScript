/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const g = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        g[a].push(b);
        g[b].push(a);
    }
    let ans = 0;
    const dfs = (i, fa) => {
        let s = values[i];
        for (const j of g[i]) {
            if (j !== fa) {
                s += dfs(j, i);
            }
        }
        if (s % k === 0) {
            ++ans;
        }
        return s;
    };
    dfs(0, -1);
    return ans;
};