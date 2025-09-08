/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    const n = nums.length;

    let leftMax = new Array(n);
    leftMax[0] = nums[0];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    }

    let rightMax = new Array(n);
    rightMax[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    let maxVal = -Infinity;

    for (let j = 1; j < n - 1; j++) {
        let candidate = (leftMax[j - 1] - nums[j]) * rightMax[j + 1];

        if (candidate > maxVal) maxVal = candidate;
    }

    return maxVal < 0 ? 0 : maxVal;
};