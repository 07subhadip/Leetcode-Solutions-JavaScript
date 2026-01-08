/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const f = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => -Infinity));
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            const v = nums1[i - 1] * nums2[j - 1];
            f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]);
            f[i][j] = Math.max(f[i][j], Math.max(0, f[i - 1][j - 1]) + v);
        }
    }
    return f[m][n];
};