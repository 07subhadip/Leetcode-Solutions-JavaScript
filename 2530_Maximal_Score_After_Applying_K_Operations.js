/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const pq = new MaxPriorityQueue();
    nums.forEach(num => pq.enqueue(num));
    let ans = 0;
    while (k > 0) {
        const v = pq.dequeue().element;
        ans += v;
        pq.enqueue(Math.floor((v + 2) / 3));
        k--;
    }
    return ans;
};