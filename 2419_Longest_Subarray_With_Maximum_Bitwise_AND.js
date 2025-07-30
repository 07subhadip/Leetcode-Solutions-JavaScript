/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let mx = Math.max(...nums);

    let ans = 0, cnt = 0;

    for (let v of nums) {
        if (v === mx) {
            cnt++;
            ans = Math.max(ans, cnt);
        } else {
            cnt = 0;
        }
    }

    return ans;
};