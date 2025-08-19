/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let [ans, cnt] = [0, 0];
    for (const x of nums) {
        if (!x) {
            ans += ++cnt;
        } else {
            cnt = 0;
        }
    }
    return ans;
};