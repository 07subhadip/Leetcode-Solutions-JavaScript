/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    const mx = Math.max(...nums);
    if (mx <= 0) {
        return mx;
    }

    const seen = new Set();
    let ans = 0;

    for (const x of nums) {
        if (x < 0 || seen.has(x)) {
            continue;
        }
        ans += x;
        seen.add(x);
    }

    return ans;
};