class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._bubbleDown();
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const el = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (el <= parent) break;
            this.heap[parentIdx] = el;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const el = this.heap[0];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftIdx < length && this.heap[leftIdx] > el) {
                swapIdx = leftIdx;
            }

            if (rightIdx < length && this.heap[rightIdx] > (swapIdx === null ? el : this.heap[leftIdx])) {
                swapIdx = rightIdx;
            }

            if (swapIdx === null) break;

            this.heap[idx] = this.heap[swapIdx];
            this.heap[swapIdx] = el;
            idx = swapIdx;
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._bubbleDown();
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const el = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (el >= parent) break;
            this.heap[parentIdx] = el;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const el = this.heap[0];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftIdx < length && this.heap[leftIdx] < el) {
                swapIdx = leftIdx;
            }

            if (rightIdx < length && this.heap[rightIdx] < (swapIdx === null ? el : this.heap[leftIdx])) {
                swapIdx = rightIdx;
            }

            if (swapIdx === null) break;

            this.heap[idx] = this.heap[swapIdx];
            this.heap[swapIdx] = el;
            idx = swapIdx;
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
    const m = nums.length;
    const n = Math.floor(m / 3);
    let s = 0;
    const pre = Array(m + 1);
    const q1 = new MaxHeap();
    for (let i = 1; i <= n * 2; ++i) {
        const x = nums[i - 1];
        s += x;
        q1.push(x);
        if (q1.size() > n) {
            s -= q1.pop();
        }
        pre[i] = s;
    }
    s = 0;
    const suf = Array(m + 1);
    const q2 = new MinHeap();
    for (let i = m; i > n; --i) {
        const x = nums[i - 1];
        s += x;
        q2.push(x);
        if (q2.size() > n) {
            s -= q2.pop();
        }
        suf[i] = s;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = n; i <= n * 2; ++i) {
        ans = Math.min(ans, pre[i] - suf[i + 1]);
    }
    return ans;
};
