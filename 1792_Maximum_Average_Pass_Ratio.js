class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return top;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx][0] >= this.heap[idx][0]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftChildIdx < length && this.heap[leftChildIdx][0] > element[0]) {
                swapIdx = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx][0] > (swapIdx === null ? element[0] : this.heap[leftChildIdx][0])) {
                swapIdx = rightChildIdx;
            }

            if (swapIdx === null) break;

            this.heap[idx] = this.heap[swapIdx];
            this.heap[swapIdx] = element;
            idx = swapIdx;
        }
    }
}


/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const maxHeap = new MaxHeap();

    for (const [passi, totali] of classes) {
        const gain = (passi + 1) / (totali + 1) - passi / totali;
        maxHeap.push([gain, passi, totali]);
    }

    while (extraStudents > 0) {
        const [_, passi, totali] = maxHeap.pop();
        const newPass = passi + 1;
        const newTotal = totali + 1;
        const newGain = (newPass + 1) / (newTotal + 1) - newPass / newTotal;
        maxHeap.push([newGain, newPass, newTotal]);
        extraStudents--;
    }

    let totalRatio = 0;
    while (maxHeap.heap.length > 0) {
        const [_, passi, totali] = maxHeap.pop();
        totalRatio += passi / totali;
    }

    return totalRatio / classes.length;
};