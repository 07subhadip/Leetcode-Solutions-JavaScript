/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
    const count = new Map();
    for (const p of power) {
        count.set(p, (count.get(p) || 0) + 1);
    }

    const sortedPowers = [...count.keys()].sort((a, b) => a - b);

    const n = sortedPowers.length;
    if (n === 0) return 0;

    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const p = sortedPowers[i];
        const currentTotalDamage = p * count.get(p);

        let prevValidIndex = binarySearchRightmost(sortedPowers, p - 3);

        let maxPrevDp = 0;
        if (prevValidIndex >= 0) {
            maxPrevDp = dp[prevValidIndex];
        }

        const takeCurrent = currentTotalDamage + maxPrevDp;
        const skipCurrent = i > 0 ? dp[i - 1] : 0;

        dp[i] = Math.max(takeCurrent, skipCurrent);
    }

    return dp[n - 1];
};

const binarySearchRightmost = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}