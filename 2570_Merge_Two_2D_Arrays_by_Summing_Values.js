/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let i = 0, j = 0
    let ans = []

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] === nums2[j][0]) {
            ans.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
            i++
            j++
        }
        else if (nums1[i][0] < nums2[j][0]) {
            ans.push([nums1[i][0], nums1[i][1]])
            i++
        }
        else if (nums1[i][0] > nums2[j][0]) {
            ans.push([nums2[j][0], nums2[j][1]])
            j++
        }
    }

    if (i < nums1.length) {
        for (; i < nums1.length; i++) {
            ans.push(nums1[i])
        }
    }
    if (j < nums2.length) {
        for (; j < nums2.length; j++) {
            ans.push(nums2[j])
        }
    }

    return ans
};