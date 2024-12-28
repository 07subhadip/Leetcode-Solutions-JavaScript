/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const s = Array(n + 1).fill(0);

    for (let i = 0; i < n; ++i) {
        s[i + 1] = s[i] + nums[i];
    }

    const pre = Array(n)
        .fill([])
        .map(() => new Array(2).fill(0));
    const suf = Array(n)
        .fill([])
        .map(() => new Array(2).fill(0));

    for (let i = 0, t = 0, idx = 0; i < n - k + 1; ++i) {
        const cur = s[i + k] - s[i];
        if (cur > t) {
            pre[i + k - 1] = [cur, i];
            t = cur;
            idx = i;
        } else {
            pre[i + k - 1] = [t, idx];
        }
    }

    for (let i = n - k, t = 0, idx = 0; i >= 0; --i) {
        const cur = s[i + k] - s[i];
        if (cur >= t) {
            suf[i] = [cur, i];
            t = cur;
            idx = i;
        } else {
            suf[i] = [t, idx];
        }
    }

    let ans = [];
    for (let i = k, t = 0; i < n - 2 * k + 1; ++i) {
        const cur = s[i + k] - s[i] + pre[i - 1][0] + suf[i + k][0];
        if (cur > t) {
            ans = [pre[i - 1][1], i, suf[i + k][1]];
            t = cur;
        }
    }

    return ans;
};