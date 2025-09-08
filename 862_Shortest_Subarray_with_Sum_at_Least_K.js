/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const prefixSum = [0];
    for (const num of nums) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + num);
    }

    const deque = []; 
    let result = Infinity;

    for (let i = 0; i < prefixSum.length; i++) {
        while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= k) {
            result = Math.min(result, i - deque.shift());
        }

        while (deque.length && prefixSum[deque[deque.length - 1]] >= prefixSum[i]) {
            deque.pop();
        }

        deque.push(i);
    }

    return result === Infinity ? -1 : result;
};