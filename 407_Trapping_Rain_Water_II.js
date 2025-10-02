/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) return 0;

    const m = heightMap.length, n = heightMap[0].length;
    const vis = Array.from({ length: m }, () => Array(n).fill(false));
    const pq = new MinPriorityQueue({ priority: (cell) => cell[0] });

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                pq.enqueue([heightMap[i][j], i, j]);
                vis[i][j] = true;
            }
        }
    }

    let ans = 0;
    const dirs = [-1, 0, 1, 0, -1];

    while (!pq.isEmpty()) {
        const [h, i, j] = pq.dequeue().element;

        for (let d = 0; d < 4; d++) {
            let x = i + dirs[d], y = j + dirs[d + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && !vis[x][y]) {
                ans += Math.max(0, h - heightMap[x][y]);
                vis[x][y] = true;
                pq.enqueue([Math.max(h, heightMap[x][y]), x, y]);
            }
        }
    }

    return ans;
};

// Solution 2

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    const m = heightMap.length;
    if (m === 0) return 0;
    const n = heightMap[0].length;
    if (m < 3 || n < 3) return 0;

    // Local min-heap implementation (array of [height, x, y])
    const heap = [];
    const heapPush = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (heap[p][0] <= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const heapPop = () => {
        if (heap.length === 0) return null;
        const res = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                const l = 2 * i + 1, r = 2 * i + 2;
                let smallest = i;
                if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
                if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return res;
    };
    const heapIsEmpty = () => heap.length === 0;

    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // push border cells
    for (let i = 0; i < m; i++) {
        heapPush([heightMap[i][0], i, 0]);
        visited[i][0] = true;
        heapPush([heightMap[i][n - 1], i, n - 1]);
        visited[i][n - 1] = true;
    }
    for (let j = 1; j < n - 1; j++) {
        heapPush([heightMap[0][j], 0, j]);
        visited[0][j] = true;
        heapPush([heightMap[m - 1][j], m - 1, j]);
        visited[m - 1][j] = true;
    }

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let water = 0;

    while (!heapIsEmpty()) {
        const [h, x, y] = heapPop();
        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (visited[nx][ny]) continue;
            visited[nx][ny] = true;
            const nh = heightMap[nx][ny];
            if (nh < h) {
                water += (h - nh);
                heapPush([h, nx, ny]);
            } else {
                heapPush([nh, nx, ny]);
            }
        }
    }

    return water;
};
