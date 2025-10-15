/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
    const n = nums.length;

    const inc = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            inc[i] = inc[i + 1] + 1;
        }
    }

    function can(k) {
        for (let i = 0; i <= n - 2 * k; i++) {
            if (inc[i] >= k && inc[i + k] >= k) {
                return true;
            }
        }
        return false;
    }

    let low = 1;
    let high = Math.floor(n / 2);
    let result = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (can(mid)) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
};