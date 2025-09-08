/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    const search = (x, l) => {
        let r = nums.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (nums[mid] >= x) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };

    nums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < nums.length; ++i) {
        const j = search(lower - nums[i], i + 1);
        const k = search(upper - nums[i] + 1, i + 1);
        ans += k - j;
    }
    return ans;
};