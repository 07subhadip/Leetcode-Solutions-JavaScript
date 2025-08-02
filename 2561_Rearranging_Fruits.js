/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
    const n = basket1.length;
    const cnt = new Map();

    for (let i = 0; i < n; i++) {
        cnt.set(basket1[i], (cnt.get(basket1[i]) || 0) + 1);
        cnt.set(basket2[i], (cnt.get(basket2[i]) || 0) - 1);
    }

    let mi = Number.MAX_SAFE_INTEGER;
    const nums = [];

    for (const [x, v] of cnt.entries()) {
        if (v % 2 !== 0) {
            return -1;
        }
        for (let i = 0; i < Math.abs(v) / 2; i++) {
            nums.push(x);
        }
        mi = Math.min(mi, x);
    }

    nums.sort((a, b) => a - b);

    let ans = 0;
    const m = nums.length;
    for (let i = 0; i < m / 2; i++) {
        ans += Math.min(nums[i], mi * 2);
    }

    return ans;
};