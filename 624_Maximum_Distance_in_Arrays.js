/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDist = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currMin = arrays[i][0];
        let currMax = arrays[i][arrays[i].length - 1];

        maxDist = Math.max(maxDist, Math.abs(currMin - maxVal));
        maxDist = Math.max(maxDist, Math.abs(currMax - minVal));

        minVal = Math.min(minVal, currMin);
        maxVal = Math.max(maxVal, currMax);
    }

    return maxDist;
};