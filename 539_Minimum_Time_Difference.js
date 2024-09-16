/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    if (timePoints.length > 1440) {
        return 0;
    }

    const n = timePoints.length;
    const nums = Array(n + 1);

    for (let i = 0; i < n; ++i) {
        const [hours, minutes] = timePoints[i].split(':').map(Number);
        nums[i] = hours * 60 + minutes;
    }

    nums.sort((a, b) => a - b);
    nums[n] = nums[0] + 1440;

    let ans = Infinity;
    for (let i = 1; i <= n; ++i) {
        ans = Math.min(ans, nums[i] - nums[i - 1]);
    }

    return ans;
};