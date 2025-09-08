class MinHeap {
    constructor() {
        this.heap = []
    }

    isEmpty() {
        return this.heap.length === 0
    }

    push(val) {
        this.heap.push(val)
        this._bubbleUp()
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop()
        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._sinkDown()
        return top
    }

    _bubbleUp() {
        let index = this.heap.length - 1
        const element = this.heap[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIndex]
            if (element[0] >= parent[0]) break
            this.heap[index] = parent
            index = parentIndex
        }
        this.heap[index] = element
    }

    _sinkDown() {
        let index = 0
        const length = this.heap.length
        const element = this.heap[0]

        while (true) {
            let left = 2 * index + 1
            let right = 2 * index + 2
            let swap = null

            if (left < length && this.heap[left][0] < element[0]) {
                swap = left
            }

            if (
                right < length &&
                this.heap[right][0] < (swap === null ? element[0] : this.heap[left][0])
            ) {
                swap = right
            }

            if (swap === null) break
            this.heap[index] = this.heap[swap]
            index = swap
        }

        this.heap[index] = element
    }
}

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const m = moveTime.length
    const n = moveTime[0].length
    const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity))
    dist[0][0] = 0

    const minHeap = new MinHeap()
    minHeap.push([0, 0, 0])

    while (!minHeap.isEmpty()) {
        const [d, i, j] = minHeap.pop()

        if (i === m - 1 && j === n - 1) return d

        if (d > dist[i][j]) continue

        for (const [dx, dy] of DIRS) {
            const x = i + dx
            const y = j + dy

            if (x < 0 || x >= m || y < 0 || y >= n) continue

            const newDist = Math.max(moveTime[x][y], d) + ((i + j) % 2) + 1

            if (newDist < dist[x][y]) {
                dist[x][y] = newDist
                minHeap.push([newDist, x, y])
            }
        }
    }

    return -1
}
