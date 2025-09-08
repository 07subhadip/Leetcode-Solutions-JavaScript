class MyMaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(val) {
        this.heap.push(val);
        this._siftUp();
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._siftDown();
        }
        return max;
    }

    front() {
        return this.heap[0] || null;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    _siftUp() {
        let i = this.heap.length - 1;
        const current = this.heap[i];
        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2);
            let parent = this.heap[parentIndex];
            if (current <= parent) break;
            this.heap[i] = parent;
            i = parentIndex;
        }
        this.heap[i] = current;
    }

    _siftDown() {
        let i = 0;
        const length = this.heap.length;
        const current = this.heap[0];
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let swapIndex = null;

            if (left < length && this.heap[left] > current) {
                swapIndex = left;
            }

            if (
                right < length &&
                this.heap[right] > (swapIndex === null ? current : this.heap[swapIndex])
            ) {
                swapIndex = right;
            }

            if (swapIndex === null) break;
            this.heap[i] = this.heap[swapIndex];
            i = swapIndex;
        }
        this.heap[i] = current;
    }
}

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const pq = new MyMaxPriorityQueue();
    const n = nums.length;
    const d = new Array(n + 1).fill(0);
    let s = 0, j = 0;

    for (let i = 0; i < n; i++) {
        s += d[i];
        while (j < queries.length && queries[j][0] <= i) {
            pq.enqueue(queries[j][1]);
            j++;
        }

        while (s < nums[i] && !pq.isEmpty() && pq.front() >= i) {
            s++;
            d[pq.dequeue() + 1]--;
        }

        if (s < nums[i]) {
            return -1;
        }
    }

    return pq.size();
};