/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // let low = 0; // Pointer for 0
    // let high = nums.length - 1; // Pointer for 2
    // let i = 0; // Pointer for iteration
    
    // while (i <= high) {
    //     if (nums[i] === 0) {
    //         // Swap nums[i] with nums[low]
    //         [nums[i], nums[low]] = [nums[low], nums[i]];
    //         low++;
    //         i++;
    //     } else if (nums[i] === 2) {
    //         // Swap nums[i] with nums[high]
    //         [nums[i], nums[high]] = [nums[high], nums[i]];
    //         high--;
    //     } else {
    //         // For nums[i] === 1, move to the next element
    //         i++;
    //     }
    // }

    let low = 0; // Pointer for 0
    let high = nums.length - 1; // Pointer for 2
    
    let i = 0; // Iterator
    
    while (i <= high) {
        if (nums[i] === 0) {
            // Swap nums[i] with nums[low]
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++;
        } else if (nums[i] === 2) {
            // Swap nums[i] with nums[high]
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        } else {
            // For nums[i] === 1, move to the next element
            i++;
        }
    }
};


// Dutch National Flag Algorithm