/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums[nums.length - 1] - nums[0];

    const countPairs = (maxDiff) => {
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] <= maxDiff) {
                count++;
                i++;
            }
        }
        return count;
    };

    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (countPairs(mid) >= p) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};