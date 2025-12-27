/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const meetingCount = Array(n).fill(0);
    const busy = [];
    const idle = [];

    const heapPush = (heap, x, compare) => {
        heap.push(x);
        let i = heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (compare(heap[p], heap[i]) <= 0) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const heapPop = (heap, compare) => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
                if (l < heap.length && compare(heap[l], heap[smallest]) < 0) smallest = l;
                if (r < heap.length && compare(heap[r], heap[smallest]) < 0) smallest = r;
                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return top;
    };

    for (let i = 0; i < n; i++) {
        heapPush(idle, i, (a, b) => a - b);
    }

    for (const [start, end] of meetings) {
        while (busy.length > 0 && busy[0][0] <= start) {
            const [, roomId] = heapPop(busy, (a, b) => a[0] - b[0] || a[1] - b[1]);
            heapPush(idle, roomId, (a, b) => a - b);
        }

        if (idle.length > 0) {
            const roomId = heapPop(idle, (a, b) => a - b);
            meetingCount[roomId]++;
            heapPush(busy, [end, roomId], (a, b) => a[0] - b[0] || a[1] - b[1]);
        } else {
            const [freeTime, roomId] = heapPop(busy, (a, b) => a[0] - b[0] || a[1] - b[1]);
            meetingCount[roomId]++;
            const duration = end - start;
            heapPush(busy, [freeTime + duration, roomId],
                (a, b) => a[0] - b[0] || a[1] - b[1]);
        }
    }

    let ans = 0;
    for (let i = 1; i < n; i++) {
        if (meetingCount[i] > meetingCount[ans]) ans = i;
    }
    return ans;
};


// Solution 2:

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const idle = new MinPriorityQueue();
    for (let i = 0; i < n; ++i) {
        idle.enqueue(i);
    }
    const busy = new PriorityQueue((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    const cnt = new Array(n).fill(0);
    for (const v of meetings) {
        const s = v[0],
            e = v[1];
        while (!busy.isEmpty() && busy.front()[0] <= s) {
            const i = busy.dequeue()[1];
            idle.enqueue(i);
        }
        let i = 0;
        if (!idle.isEmpty()) {
            i = idle.dequeue();
            busy.enqueue([e, i]);
        } else {
            const x = busy.dequeue();
            i = x[1];
            busy.enqueue([x[0] + e - s, i]);
        }
        ++cnt[i];
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        if (cnt[ans] < cnt[i]) {
            ans = i;
        }
    }
    return ans;
};