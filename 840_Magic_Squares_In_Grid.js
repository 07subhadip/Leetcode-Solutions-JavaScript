/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const isMagic = (r, c) => {
        const nums = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const num = grid[r + i][c + j];
                if (num < 1 || num > 9 || nums.has(num)) return false;
                nums.add(num);
            }
        }

        return (
            grid[r][c] + grid[r][c + 1] + grid[r][c + 2] === 15 &&
            grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2] === 15 &&
            grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2] === 15 &&
            grid[r][c] + grid[r + 1][c] + grid[r + 2][c] === 15 &&
            grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1] === 15 &&
            grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2] === 15 &&
            grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] === 15 &&
            grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] === 15
        );
    };

    let count = 0;

    for (let r = 0; r <= grid.length - 3; r++) {
        for (let c = 0; c <= grid[0].length - 3; c++) {
            if (isMagic(r, c)) {
                count++;
            }
        }
    }

    return count;
};

// Solution 2

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const check = (i, j) => {
        if (i + 3 > m || j + 3 > n) {
            return 0;
        }
        const cnt = Array(16).fill(0);
        const row = Array(3).fill(0);
        const col = Array(3).fill(0);
        let [a, b] = [0, 0];
        for (let x = i; x < i + 3; ++x) {
            for (let y = j; y < j + 3; ++y) {
                const v = grid[x][y];
                if (v < 1 || v > 9 || ++cnt[v] > 1) {
                    return 0;
                }
                row[x - i] += v;
                col[y - j] += v;
                if (x - i === y - j) {
                    a += v;
                }
                if (x - i === 2 - (y - j)) {
                    b += v;
                }
            }
        }
        if (a !== b) {
            return 0;
        }
        for (let k = 0; k < 3; ++k) {
            if (row[k] !== a || col[k] !== a) {
                return 0;
            }
        }
        return 1;
    };
    let ans = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            ans += check(i, j);
        }
    }
    return ans;
};