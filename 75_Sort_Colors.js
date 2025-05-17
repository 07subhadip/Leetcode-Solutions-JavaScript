/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const zero = [], one = [], two = []

    for (const val of nums) {
        switch (val) {
            case 1:
                one.push(val)
                break
            case 2:
                two.push(val)
                break
            case 0:
                zero.push(val)
                break
        }
    }

    const sorted = [...zero, ...one, ...two]

    for (let i = 0; i < nums.length; i++) {
        nums[i] = sorted[i]
    }
};