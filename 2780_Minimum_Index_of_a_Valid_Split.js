// Solution : Beats 100% Users on Runtime and Memory Usage

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    const n = nums.length;

    let candidate = nums[0], count = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }

    const dom = candidate;

    let totalCount = 0;

    for (let num of nums) {
        if (num === dom) totalCount++;
    }

    let leftCount = 0;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dom) leftCount++;

        let leftLen = i + 1;
        let rightLen = n - i - 1;
        let rightCount = totalCount - leftCount;

        if (leftCount * 2 > leftLen && rightCount * 2 > rightLen) {
            return i;
        }
    }

    return -1;
};