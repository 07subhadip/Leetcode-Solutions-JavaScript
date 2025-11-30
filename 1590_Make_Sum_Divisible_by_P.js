/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    let k = 0;
    for (const x of nums) {
        k = (k + x) % p;
    }
    if (k === 0) {
        return 0;
    }

    const last = new Map();
    last.set(0, -1);
    const n = nums.length;
    let ans = n;
    let cur = 0;

    for (let i = 0; i < n; ++i) {
        cur = (cur + nums[i]) % p;
        const target = (cur - k + p) % p;
        if (last.has(target)) {
            const j = last.get(target);
            ans = Math.min(ans, i - j);
        }
        last.set(cur, i);
    }

    return ans === n ? -1 : ans;
};


// Second Solution for maintaining the streak

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    let totalMod = 0;
    for (const num of nums) {
        totalMod = (totalMod + num) % p;
    }

    if (totalMod === 0) return 0;

    const modMap = new Map();
    modMap.set(0, -1);

    let currentMod = 0;
    let minLen = nums.length;

    for (let i = 0; i < nums.length; i++) {
        currentMod = (currentMod + nums[i]) % p;
        const neededMod = (currentMod - totalMod + p) % p;

        if (modMap.has(neededMod)) {
            minLen = Math.min(minLen, i - modMap.get(neededMod));
        }

        modMap.set(currentMod, i);
    }

    return minLen === nums.length ? -1 : minLen;
};