/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
    const n = startTime.length;
    const gaps = new Array(n + 1);
    gaps[0] = startTime[0];
    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    let windowSum = 0, maxFree = 0;
    for (let i = 0; i <= n; i++) {
        windowSum += gaps[i];
        if (i >= k) {
            maxFree = Math.max(maxFree, windowSum);
            windowSum -= gaps[i - k];
        }
    }
    return maxFree;
};