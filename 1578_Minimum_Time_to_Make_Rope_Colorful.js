/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    let totalCost = 0;
    let i = 0;
    const n = colors.length;

    while (i < n) {
        let currentColor = colors[i];
        let maxTime = neededTime[i];
        let totalTime = neededTime[i];
        let count = 1;

        while (i + 1 < n && colors[i + 1] === currentColor) {
            i++;
            totalTime += neededTime[i];
            maxTime = Math.max(maxTime, neededTime[i]);
            count++;
        }

        if (count > 1) {
            totalCost += totalTime - maxTime;
        }

        i++;
    }

    return totalCost;
};