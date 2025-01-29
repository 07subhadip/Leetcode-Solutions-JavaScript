// Solution 1 : Beats 32.23% users on Runtime

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length;
    const parent = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) {
            return false;
        }
        parent[rootX] = rootY;
        return true;
    };
    
    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v];
        }
    }
    
    return [];
};

// Solution 2 : Beats 65.96% users on Runtime

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = Array.from({ length: edges.length + 1 }, (_, index) => index);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); 
        }
        return parent[x];
    };

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) {
            return true;
        }
        parent[rootX] = rootY;
        return false;
    };

    for (const [u, v] of edges) {
        if (union(u, v)) {
            return [u, v];
        }
    }

    return [];
};