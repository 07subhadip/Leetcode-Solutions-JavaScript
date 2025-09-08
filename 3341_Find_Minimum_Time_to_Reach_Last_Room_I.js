class CustomPriorityQueue {
    constructor(compare) {
        this._heap = []
        this._compare = compare
    }

    enqueue(val) {
        this._heap.push(val)
        this._siftUp()
    }

    dequeue() {
        if (this.isEmpty()) return
        const top = this._heap[0]
        const end = this._heap.pop()

        if (this._heap.length > 0) {
            this._heap[0] = end
            this._siftDown()
        }

        return top
    }

    isEmpty() {
        return this._heap.length === 0
    }

    _siftUp() {
        let i = this._heap.length - 1

        while (i > 0) {
            let p = Math.floor((i - 1) / 2)
            if (this._compare(this._heap[i], this._heap[p]) >= 0) break
                ;[this._heap[i], this._heap[p]] = [this._heap[p], this._heap[i]]
            i = p
        }
    }

    _siftDown() {
        let i = 0
        const n = this._heap.length

        while (true) {
            let l = 2 * i + 1
            let r = 2 * i + 2
            let smallest = i
            if (l < n && this._compare(this._heap[l], this._heap[smallest]) < 0) smallest = l
            if (r < n && this._compare(this._heap[r], this._heap[smallest]) < 0) smallest = r
            if (smallest === i) break
                ;[this._heap[i], this._heap[smallest]] = [this._heap[smallest], this._heap[i]]
            i = smallest
        }
    }
}

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const [n, m] = [moveTime.length, moveTime[0].length]
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity))
    dist[0][0] = 0
    const pq = new CustomPriorityQueue((a, b) => a[0] - b[0])
    pq.enqueue([0, 0, 0])
    const dirs = [-1, 0, 1, 0, -1]

    while (true) {
        const [d, i, j] = pq.dequeue()

        if (i === n - 1 && j === m - 1) return d
        if (d > dist[i][j]) continue

        for (let k = 0; k < 4; k++) {
            const [x, y] = [i + dirs[k], j + dirs[k + 1]]

            if (x >= 0 && x < n && y >= 0 && y < m) {
                const t = Math.max(moveTime[x][y], dist[i][j]) + 1
                
                if (dist[x][y] > t) {
                    dist[x][y] = t
                    pq.enqueue([t, x, y])
                }
            }
        }
    }
}
