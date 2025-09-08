/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    let left = 1;
    let right = Math.max(...candies);
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;

        for (let candy of candies) {
            count += Math.floor(candy / mid);
        }

        if (count >= k) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};