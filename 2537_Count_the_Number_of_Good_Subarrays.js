/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    const n = nums.length;
    let ans = 0;
    let left = 0;
    let pairs = 0;
    const freq = new Map();

    for (let right = 0; right < n; right++) {
        const count = freq.get(nums[right]) || 0;
        pairs += count;
        freq.set(nums[right], count + 1);

        while (pairs >= k && left <= right) {
            ans += (n - right);

            const f = freq.get(nums[left]);
            freq.set(nums[left], f - 1);
            pairs -= (f - 1);
            left++;
        }
    }

    return ans;
};