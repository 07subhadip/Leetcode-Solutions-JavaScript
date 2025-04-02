// Solution 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let n = nums.length;
    let max_value = -Infinity;
    let max_k = -Infinity;

    for (let j = n - 2; j > 0; j--) {
        max_k = Math.max(max_k, nums[j + 1]);

        for (let i = 0; i < j; i++) {
            let triplet_value = (nums[i] - nums[j]) * max_k;
            max_value = Math.max(max_value, triplet_value);
        }
    }

    return max_value > 0 ? max_value : 0;
};

// Solution 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    const n = nums.length;
    if (n < 3) return 0;

    const prefixMax = new Array(n);
    prefixMax[0] = nums[0];

    for (let j = 1; j < n; j++) {
        prefixMax[j] = Math.max(prefixMax[j - 1], nums[j]);
    }

    const suffixMax = new Array(n);
    suffixMax[n - 1] = nums[n - 1];

    for (let j = n - 2; j >= 0; j--) {
        suffixMax[j] = Math.max(suffixMax[j + 1], nums[j]);
    }

    let maxValue = 0;

    for (let j = 1; j <= n - 2; j++) {
        const diff = prefixMax[j - 1] - nums[j];
        const candidate = diff * suffixMax[j + 1];
        maxValue = Math.max(maxValue, candidate);
    }

    return maxValue;
};