/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
    const frequencyMap = {};

    const differenceArray = {};

    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        differenceArray[num] = differenceArray[num] || 0;

        differenceArray[num - k] = (differenceArray[num - k] || 0) + 1;
        differenceArray[num + k + 1] = (differenceArray[num + k + 1] || 0) - 1;
    }

    let maxFrequency = 0;
    let runningSum = 0;

    const sortedKeys = Object.keys(differenceArray)
        .map(Number)
        .sort((a, b) => a - b);

    for (const targetValue of sortedKeys) {
        runningSum += differenceArray[targetValue];

        const currentFrequency = Math.min(
            runningSum,
            (frequencyMap[targetValue] || 0) + numOperations
        );

        maxFrequency = Math.max(maxFrequency, currentFrequency);
    }

    return maxFrequency;
};