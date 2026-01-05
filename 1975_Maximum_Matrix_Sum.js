/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let cnt = 0;
    let s = 0;
    let mi = Infinity;
    for (const row of matrix) {
        for (const v of row) {
            s += Math.abs(v);
            mi = Math.min(mi, Math.abs(v));
            cnt += v < 0;
        }
    }
    if (cnt % 2 == 0) {
        return s;
    }
    return s - mi * 2;
};

// Solution 2

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let [s, cnt, mi] = [0, 0, Infinity];
    for (const row of matrix) {
        for (const x of row) {
            if (x < 0) {
                ++cnt;
            }
            const y = Math.abs(x);
            s += y;
            mi = Math.min(mi, y);
        }
    }
    return cnt % 2 === 0 ? s : s - 2 * mi;
};