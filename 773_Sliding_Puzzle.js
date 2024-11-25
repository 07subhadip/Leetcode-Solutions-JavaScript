/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const t = new Array(6);

    const gets = () => {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                t[i * 3 + j] = String(board[i][j]);
            }
        }
        return t.join('');
    };

    const setb = (s) => {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = Number(s[i * 3 + j]);
            }
        }
    };

    const f = () => {
        const res = [];
        let i, j;
        
        outer: for (i = 0; i < 2; i++) {
            for (j = 0; j < 3; j++) {
                if (board[i][j] === 0) break outer;
            }
        }

        for (const [a, b] of [[0, -1], [0, 1], [1, 0], [-1, 0]]) {
            const x = i + a;
            const y = j + b;
            if (x >= 0 && x < 2 && y >= 0 && y < 3) {
                [board[i][j], board[x][y]] = [board[x][y], board[i][j]]; 
                res.push(gets());
                [board[i][j], board[x][y]] = [board[x][y], board[i][j]];
            }
        }
        return res;
    };

    const start = gets();
    const end = "123450";
    if (start === end) return 0;

    const vis = new Set([start]);
    const q = [start];
    let ans = 0;

    while (q.length) {
        ans++;
        const len = q.length;
        for (let _ = 0; _ < len; _++) {
            const x = q.shift();
            setb(x);
            for (const y of f()) {
                if (y === end) return ans;
                if (!vis.has(y)) {
                    vis.add(y);
                    q.push(y);
                }
            }
        }
    }

    return -1;
};