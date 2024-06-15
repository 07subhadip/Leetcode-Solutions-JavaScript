/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    // Array of projects where each project is [capital, profit]
    let projects = [];
    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]]);
    }

    // Sort projects by the capital required in ascending order
    projects.sort((a, b) => a[0] - b[0]);

    // Max-heap to store profits of the projects we can afford
    let maxHeap = new MaxHeap();
    let index = 0;

    for (let i = 0; i < k; i++) {
        // Push all projects we can afford with the current capital into the max-heap
        while (index < projects.length && projects[index][0] <= w) {
            maxHeap.insert(projects[index][1]);
            index++;
        }

        // If there are no projects we can afford, break early
        if (maxHeap.isEmpty()) {
            break;
        }

        // Select the project with the maximum profit
        w += maxHeap.extractMax();
    }

    return w;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.isEmpty()) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return max;
    }

    _heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    _heapifyDown(index) {
        let currentIndex = index;
        const length = this.heap.length;
        const element = this.heap[currentIndex];

        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            [this.heap[currentIndex], this.heap[swap]] = [this.heap[swap], this.heap[currentIndex]];
            currentIndex = swap;
        }
    }
}