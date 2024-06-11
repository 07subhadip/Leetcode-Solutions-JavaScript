/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // Create a map to store the index of each element in arr2
    const indexMap = new Map();
    for (let i = 0; i < arr2.length; i++) {
        indexMap.set(arr2[i], i);
    }
    
    // Custom sort function
    return arr1.sort((a, b) => {
        // If both elements are in arr2, sort based on their indices
        if (indexMap.has(a) && indexMap.has(b)) {
            return indexMap.get(a) - indexMap.get(b);
        }
        // If only one element is in arr2, it comes before
        // If neither element is in arr2, sort them normally
        return indexMap.has(a) ? -1 : indexMap.has(b) ? 1 : a - b;
    });
};