/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let n = nums.length;
    let result = '';
    for (let i = 0; i < n; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }
    return result;
};

// Solution 2

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const n = nums.length;
    const numsSet = new Set(nums);

    function generate(curr) {
        if (curr.length === n) {
            if (!numsSet.has(curr)) {
                return curr;
            }
            return '';
        }

        let addZero = generate(curr + '0');
        if (addZero) return addZero;

        return generate(curr + '1');
    }

    return generate('');
};
