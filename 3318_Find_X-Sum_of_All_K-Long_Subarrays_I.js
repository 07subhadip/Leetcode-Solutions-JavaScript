/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i <= n - k; i++) {
        const freq = new Map();
        let windowSum = 0;

        for (let j = i; j < i + k; j++) {
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
            windowSum += nums[j];
        }

        if (freq.size <= x) {
            result.push(windowSum);
            continue;
        }

        const elements = Array.from(freq.entries());

        elements.sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }
            return b[0] - a[0];
        });

        let xSum = 0;
        for (let j = 0; j < x; j++) {
            const [value, count] = elements[j];
            xSum += value * count;
        }

        result.push(xSum);
    }

    return result;
};