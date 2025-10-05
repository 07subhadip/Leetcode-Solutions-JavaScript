/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    const n = grid.length;

    function canReach(t) {
        if (grid[0][0] > t) return false;

        const visited = Array(n).fill().map(() => Array(n).fill(false));
        const queue = [[0, 0]];
        visited[0][0] = true;

        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            if (x === n - 1 && y === n - 1) {
                return true;
            }

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < n &&
                    !visited[nx][ny] && grid[nx][ny] <= t) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return false;
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            right = Math.max(right, grid[i][j]);
        }
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canReach(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};