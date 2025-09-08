/**
* @param {number} n
* @param {number[][]} edges
* @return {number}
*/
var findChampion = function(n, edges) {
    const indeg = Array(n).fill(0);
    for (const [_, v] of edges) {
        ++indeg[v];
    }
    let ans = -1;
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
        if (indeg[i] === 0) {
            ++cnt;
            ans = i;
        }
    }
    return cnt === 1 ? ans : -1;
};