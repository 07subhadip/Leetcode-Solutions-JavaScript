/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let ans = 0;
    if (nums2.length % 2 != 0) {
        ans ^= nums1.reduce((a, c) => a ^ c, 0);
    }
    if (nums1.length % 2 != 0) {
        ans ^= nums2.reduce((a, c) => a ^ c, 0);
    }
    return ans;
};