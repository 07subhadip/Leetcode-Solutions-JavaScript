class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this._heapifyUp();
        } else if (val > this.minHeap[0]) {
            this.minHeap[0] = val;
            this._heapifyDown();
        }
        return this.minHeap[0];
    }

    _heapifyUp() {
        let index = this.minHeap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.minHeap[parentIndex] > this.minHeap[index]) {
                [this.minHeap[parentIndex], this.minHeap[index]] = [this.minHeap[index], this.minHeap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.minHeap.length) {
            let smallerChildIndex = 2 * index + 1;
            if (2 * index + 2 < this.minHeap.length && this.minHeap[2 * index + 2] < this.minHeap[smallerChildIndex]) {
                smallerChildIndex = 2 * index + 2;
            }
            if (this.minHeap[index] > this.minHeap[smallerChildIndex]) {
                [this.minHeap[index], this.minHeap[smallerChildIndex]] = [this.minHeap[smallerChildIndex], this.minHeap[index]];
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */