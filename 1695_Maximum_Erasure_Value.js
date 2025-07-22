/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    const vis = new Set()
    let ans = 0
    let s = 0
    let i = 0
    for (const x of nums) {
        while (vis.has(x)) {
            s -= nums[i]
            vis.delete(nums[i])
            i++
        }
        vis.add(x)
        s += x
        ans = Math.max(ans, s)
    }
    return ans
};