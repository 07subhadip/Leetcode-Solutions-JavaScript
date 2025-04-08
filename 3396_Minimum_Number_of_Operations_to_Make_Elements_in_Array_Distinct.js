/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    const n = nums.length;
    const maxOperations = Math.ceil(n / 3);

    const isDistinct = (arr) => {
        const uniqueValues = new Set(arr);

        return uniqueValues.size === arr.length;
    };

    for (let k = 0; k <= maxOperations; k++) {
        const startIndex = k * 3;
        const remaining = startIndex < n ? nums.slice(startIndex) : [];

        if (isDistinct(remaining)) {
            return k;
        }
    }

    return maxOperations;
};