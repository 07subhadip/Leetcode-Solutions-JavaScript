/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let n = nums.length;

    let negCount = binarySearch(nums, 0);

    let posCount = n - binarySearch(nums, 1);

    return Math.max(negCount, posCount);
};

const binarySearch = (arr, target) => {
    let left = 0, right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    
    return left;
}