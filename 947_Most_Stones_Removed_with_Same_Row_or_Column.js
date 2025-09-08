/**
 * @param {number[][]} stones
 * @return {number}
 */

class UnionFind {
    constructor() {
        this.parent = {};
        this.rank = {};
    }
    
    find(x) {
        if (!(x in this.parent)) {
            this.parent[x] = x;
            this.rank[x] = 0;
        }
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}
var removeStones = function(stones) {
    let uf = new UnionFind();
    
    for (let [x, y] of stones) {
        uf.union(x, y + 10001); 
    }
    
    let uniqueParents = new Set();
    for (let [x, y] of stones) {
        uniqueParents.add(uf.find(x));
    }
    
    return stones.length - uniqueParents.size;
};