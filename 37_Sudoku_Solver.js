/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
    const n = 9;

    const isValid = (row, col, num) => {
        for (let c = 0; c < n; c++) {
            if (board[row][c] === num) {
                return false;
            }
        }

        for (let r = 0; r < n; r++) {
            if (board[r][col] === num) {
                return false;
            }
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (board[startRow + r][startCol + c] === num) {
                    return false;
                }
            }
        }

        return true;
    };

    const solve = () => {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const charNum = String(num);
                        if (isValid(row, col, charNum)) {
                            board[row][col] = charNum;
                            if (solve()) {
                                return true; 
                            } else {
                                board[row][col] = '.'; 
                            }
                        }
                    }
                    return false; 
                }
            }
        }
        return true; 
    };

    solve();
};


// More optimized approach

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku2 = function(board) {
    const n = 9;

    const rows = Array.from({ length: 9 }, () => Array(10).fill(false));
    const cols = Array.from({ length: 9 }, () => Array(10).fill(false));
    const boxes = Array.from({ length: 9 }, () => Array(10).fill(false));

    const getBoxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const ch = board[r][c];
            if (ch !== '.') {
                const num = Number(ch);
                rows[r][num] = true;
                cols[c][num] = true;
                boxes[getBoxIndex(r, c)][num] = true;
            }
        }
    }

    const solve = () => {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const boxIdx = getBoxIndex(r, c);
                        if (!rows[r][num] && !cols[c][num] && !boxes[boxIdx][num]) {
                            board[r][c] = String(num);
                            rows[r][num] = cols[c][num] = boxes[boxIdx][num] = true;

                            if (solve()) return true;

                            // backtrack
                            board[r][c] = '.';
                            rows[r][num] = cols[c][num] = boxes[boxIdx][num] = false;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
};
