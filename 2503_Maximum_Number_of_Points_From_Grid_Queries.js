class UnionFind {
    constructor(n) {
        this.parent = new Array(n);
        this.size = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) return;
        if (this.size[rootX] < this.size[rootY]) {
            [rootX, rootY] = [rootY, rootX];
        }
        this.parent[rootY] = rootX;
        this.size[rootX] += this.size[rootY];
    }

    getSize(x) {
        return this.size[this.find(x)];
    }
}

/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
    const m = grid.length, n = grid[0].length;
    const total = m * n;

    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cells.push({ val: grid[i][j], x: i, y: j });
        }
    }

    cells.sort((a, b) => a.val - b.val);

    const uf = new UnionFind(total);
    const added = Array(total).fill(false);

    const queriesWithIndex = queries.map((q, i) => ({ q, i }));
    queriesWithIndex.sort((a, b) => a.q - b.q);

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ans = Array(queries.length).fill(0);
    let cellIndex = 0;

    for (let { q, i } of queriesWithIndex) {
        while (cellIndex < cells.length && cells[cellIndex].val < q) {
            const { x, y } = cells[cellIndex];
            const idx = x * n + y;
            added[idx] = true;

            for (let [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;

                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    const nIdx = nx * n + ny;

                    if (added[nIdx]) {
                        uf.union(idx, nIdx);
                    }
                }
            }
            cellIndex++;
        }

        const startIdx = 0;

        if (added[startIdx]) {
            ans[i] = uf.getSize(startIdx);
        } else {
            ans[i] = 0;
        }
    }
    return ans;
};