/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
    class DSU {
        constructor(n) {
            this.parent = Array(n).fill(0).map((_, i) => i);
            this.rank = Array(n).fill(0);
        }

        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }

            return this.parent[x];
        }

        union(x, y) {
            let xr = this.find(x), yr = this.find(y);
            if (xr === yr) return;
            if (this.rank[xr] < this.rank[yr]) {
                this.parent[xr] = yr;
            } else if (this.rank[xr] > this.rank[yr]) {
                this.parent[yr] = xr;
            } else {
                this.parent[yr] = xr;
                this.rank[xr]++;
            }
        }
    }

    let dsu = new DSU(n);

    for (let [u, v, w] of edges) {
        dsu.union(u, v);
    }

    const ALL_ONES = (1 << 18) - 1;
    let compMask = Array(n).fill(ALL_ONES);

    for (let [u, v, w] of edges) {
        let comp = dsu.find(u);
        compMask[comp] &= w;
    }

    let ans = [];

    for (let [s, t] of query) {
        if (dsu.find(s) !== dsu.find(t)) {
            ans.push(-1);
        } else {
            ans.push(compMask[dsu.find(s)]);
        }
    }

    return ans;
};