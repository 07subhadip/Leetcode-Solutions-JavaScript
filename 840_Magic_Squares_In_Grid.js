/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
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