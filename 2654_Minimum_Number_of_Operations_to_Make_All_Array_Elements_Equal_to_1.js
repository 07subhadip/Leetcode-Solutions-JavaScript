/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let one_count = 0;
    let cur_gcd = 0

    const gcd = (a, b) => {
        while (a && b) {
            a = a % b
            let temp = a
            a = b
            b = temp
        }
        return Math.max(a, b)
    }

    for (let num of nums) {
        if (num == 1) {
            one_count++
        }
        cur_gcd = gcd(cur_gcd, num)
    }

    if (one_count) return nums.length - one_count

    if (cur_gcd !== 1) return -1

    let min_sub_len = Infinity;

    for (let l = 0; l < nums.length; l++) {
        cur_gcd = 0
        for (let r = l; r < nums.length; r++) {
            if ((r - l + 1) > min_sub_len) break;

            cur_gcd = gcd(cur_gcd, nums[r])

            if (cur_gcd === 1) {
                min_sub_len = Math.min(min_sub_len, r - l + 1)
                break
            }
        }
    }

    return ((min_sub_len - 1) + nums.length - 1)
};