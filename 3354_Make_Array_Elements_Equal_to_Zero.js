/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
    const n = nums.length;
    let validCount = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (simulate(nums, i, 1)) {
                validCount++;
            }
            if (simulate(nums, i, -1)) {
                validCount++;
            }
        }
    }

    return validCount;
};

function simulate(originalNums, startPos, initialDirection) {
    const nums = [...originalNums];
    let curr = startPos;
    let direction = initialDirection;
    const n = nums.length;

    while (curr >= 0 && curr < n) {
        if (nums[curr] === 0) {
            curr += direction;
        } else {
            nums[curr]--;
            direction = -direction;
            curr += direction;
        }
    }

    return nums.every(x => x === 0);
}