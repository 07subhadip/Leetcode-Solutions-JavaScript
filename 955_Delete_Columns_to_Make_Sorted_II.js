/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const n = strs.length;
    const m = strs[0].length;
    const st = Array(n - 1).fill(false);
    let ans = 0;

    for (let j = 0; j < m; j++) {
        let mustDel = false;
        for (let i = 0; i < n - 1; i++) {
            if (!st[i] && strs[i][j] > strs[i + 1][j]) {
                mustDel = true;
                break;
            }
        }
        if (mustDel) {
            ans++;
        } else {
            for (let i = 0; i < n - 1; i++) {
                if (!st[i] && strs[i][j] < strs[i + 1][j]) {
                    st[i] = true;
                }
            }
        }
    }

    return ans;
};