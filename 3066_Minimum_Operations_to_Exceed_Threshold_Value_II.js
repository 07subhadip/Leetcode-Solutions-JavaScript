/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        size() {
            return this.heap.length;
        }
        peek() {
            return this.heap[0];
        }
        push(val) {
            this.heap.push(val);
            this._heapifyUp();
        }
        pop() {
            if (this.heap.length === 0) return undefined;
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this._heapifyDown();
            }
            return min;
        }
        _heapifyUp() {
            let index = this.heap.length - 1;
            const element = this.heap[index];
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];
                if (element >= parent) break;
                this.heap[index] = parent;
                this.heap[parentIndex] = element;
                index = parentIndex;
            }
        }
        _heapifyDown() {
            let index = 0;
            const length = this.heap.length;
            const element = this.heap[0];
            while (true) {
                let leftIndex = 2 * index + 1;
                let rightIndex = 2 * index + 2;
                let smallest = index;
                if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                    smallest = leftIndex;
                }
                if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
                    smallest = rightIndex;
                }
                if (smallest === index) break;
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            }
        }
    }
    const heap = new MinHeap();
    for (const num of nums) {
        heap.push(num);
    }

    let operations = 0;
    while (heap.size() > 1 && heap.peek() < k) {
        const x = heap.pop();
        const y = heap.pop();
        const newVal = 2 * Math.min(x, y) + Math.max(x, y);
        heap.push(newVal);
        operations++;
    }

    return heap.peek() >= k ? operations : -1;
};