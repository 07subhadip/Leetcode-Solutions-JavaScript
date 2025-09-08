/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
    const f = Array.from({ length: k }, () => Array(k).fill(0));

    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i] % k;

        for (let j = 0; j < k; j++) {
            let y = (j - x + k) % k;

            f[x][j] = Math.max(f[x][j], f[y][j] + 1);

            ans = Math.max(ans, f[x][j]);
        }
    }

    return ans;
};