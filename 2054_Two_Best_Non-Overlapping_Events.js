/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;
    const f = new Array(n).fill(0);
    f[n - 1] = events[n - 1][2];

    for (let i = n - 2; i >= 0; i--) {
        f[i] = Math.max(f[i + 1], events[i][2]);
    }

    let ans = 0;

    for (const [_, e, v] of events) {
        let idx = bisectRight(events, e);
        let value = v;
        if (idx < n) {
            value += f[idx];
        }
        ans = Math.max(ans, value);
    }

    return ans;
};

const bisectRight = (events, target)=>{
    let low = 0, high = events.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (events[mid][0] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}