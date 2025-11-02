/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
    const g = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    for (const [i, j] of guards) {
        g[i][j] = 2;
    }

    for (const [i, j] of walls) {
        g[i][j] = 2;
    }

    const dirs = [-1, 0, 1, 0, -1];

    for (const [i, j] of guards) {
        for (let k = 0; k < 4; ++k) {
            let [x, y] = [i, j];
            let [a, b] = [dirs[k], dirs[k + 1]];
            while (x + a >= 0 && x + a < m && y + b >= 0 && y + b < n && g[x + a][y + b] < 2) {
                x += a;
                y += b;
                g[x][y] = 1;
            }
        }
    }

    let ans = 0;
    for (const row of g) {
        for (const v of row) {
            ans += v === 0 ? 1 : 0;
        }
    }

    return ans;
};




/*----------------------------------------------------------------*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
    const grid = Array(m).fill().map(() => Array(n).fill(0));

    for (const [row, col] of guards) {
        grid[row][col] = 'G';
    }

    for (const [row, col] of walls) {
        grid[row][col] = 'W';
    }

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (const [guardRow, guardCol] of guards) {
        for (const [dr, dc] of directions) {
            let row = guardRow + dr;
            let col = guardCol + dc;

            while (row >= 0 && row < m && col >= 0 && col < n) {
                if (grid[row][col] === 'W' || grid[row][col] === 'G') {
                    break;
                }

                grid[row][col] = 'V';

                row += dr;
                col += dc;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                count++;
            }
        }
    }

    return count;
};