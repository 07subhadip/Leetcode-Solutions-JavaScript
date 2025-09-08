/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    const merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        
        return result;
    };
    
    const mergeSort = (array) => {
        if (array.length <= 1) {
            return array;
        }
        
        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));
        
        return merge(left, right);
    };
    
    return mergeSort(nums);
};