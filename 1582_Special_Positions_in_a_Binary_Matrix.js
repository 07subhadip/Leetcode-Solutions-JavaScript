/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const rows = Array(m).fill(0);
    const cols = Array(n).fill(0);

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            rows[i] += mat[i][j];
            cols[j] += mat[i][j];
        }
    }

    let ans = 0;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                ++ans;
            }
        }
    }

    return ans;
};
