/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let chunks = 0;
    let maxInChunk = 0;

    for (let i = 0; i < arr.length; i++) {
        maxInChunk = Math.max(maxInChunk, arr[i]);
        if (maxInChunk === i) {
            chunks++;
        }
    }

    return chunks;
};