/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let left = 0;
    let maxLength = 0;
    let currentOr = 0;

    for (let right = 0; right < nums.length; right++) {
        const currentNum = nums[right];

        while ((currentNum & currentOr) !== 0) {
            currentOr ^= nums[left];
            left++;
        }

        currentOr |= currentNum;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};