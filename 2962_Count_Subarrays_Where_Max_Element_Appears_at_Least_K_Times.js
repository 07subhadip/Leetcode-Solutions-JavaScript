/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    const n = nums.length;
    const maxVal = Math.max(...nums);
    let left = 0, count = 0, result = 0;

    for (let right = 0; right < n; right++) {
        if (nums[right] === maxVal) count++;

        while (count >= k) {
            result += n - right;
            if (nums[left] === maxVal) count--;
            left++;
        }
    }

    return result;
};