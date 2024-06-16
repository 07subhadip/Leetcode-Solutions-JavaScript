/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    // let patches = 0;
    // let maxReach = 0;
    // let i = 0;

    // while (maxReach < n) {
    //     if (i < nums.length && nums[i] <= maxReach + 1) {
    //         maxReach += nums[i];
    //         i++;
    //     } else {
    //         patches++;
    //         maxReach = maxReach * 2 + 1; // Greedily add the maximum possible number
    //     }
    // }

    // return patches;

    //  let patches = 0;
    // let maxReach = 0;
    // let idx = 0;

    // while (maxReach < n) {
    //     if (idx < nums.length && nums[idx] <= maxReach + 1) {
    //         maxReach += nums[idx];
    //         idx++;
    //     } else {
    //         patches++;
    //         maxReach = maxReach * 2 + 1; // Greedily add the maximum possible number
    //     }
    // }

    // return patches;

    let patches = 0;
    let maxReach = 0;
    let idx = 0;

    while (maxReach < n) {
        if (idx < nums.length && nums[idx] <= maxReach + 1) {
            maxReach += nums[idx];
            idx++;
        } else {
            patches++;
            maxReach = maxReach * 2 + 1; // Greedily add the maximum possible number
        }
    }

    return patches;
};