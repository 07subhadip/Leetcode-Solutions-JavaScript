/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let totalXorSum = 0;
    const n = nums.length;

    function findXorSumRecursive(index, currentXor) {
        if (index === n) {
            totalXorSum += currentXor;
            return;
        }

        findXorSumRecursive(index + 1, currentXor);

        findXorSumRecursive(index + 1, currentXor ^ nums[index]);
    }

    findXorSumRecursive(0, 0);

    return totalXorSum;
};