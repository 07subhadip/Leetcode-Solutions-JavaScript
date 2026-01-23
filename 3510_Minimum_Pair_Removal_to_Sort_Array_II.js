/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
    class MinHeap {
        constructor() {
            this.data = [];
        }

        push(val) {
            this.data.push(val);
            this.up(this.data.length - 1);
        }

        pop() {
            if (this.data.length === 0) return null;
            const top = this.data[0];
            const bottom = this.data.pop();
            if (this.data.length > 0) {
                this.data[0] = bottom;
                this.down(0);
            }
            return top;
        }

        up(pos) {
            const { data } = this;
            const item = data[pos];
            while (pos > 0) {
                const parent = (pos - 1) >>> 1;
                const current = data[parent];
                if (this.compare(item, current) < 0) {
                    data[pos] = current;
                    pos = parent;
                } else {
                    break;
                }
            }
            data[pos] = item;
        }

        down(pos) {
            const { data } = this;
            const halfLength = data.length >>> 1;
            const item = data[pos];
            while (pos < halfLength) {
                let left = (pos << 1) + 1;
                let best = data[left];
                const right = left + 1;
                if (
                    right < data.length &&
                    this.compare(data[right], best) < 0
                ) {
                    left = right;
                    best = data[right];
                }
                if (this.compare(best, item) < 0) {
                    data[pos] = best;
                    pos = left;
                } else {
                    break;
                }
            }
            data[pos] = item;
        }

        compare(a, b) {
            if (a[0] !== b[0]) return a[0] - b[0];
            return a[1] - b[1];
        }
    }

    const n = nums.length;
    const prev = new Int32Array(n).fill(-1);
    const next = new Int32Array(n).fill(-1);
    const currentSums = new Float64Array(n).fill(Infinity);
    const sl = new MinHeap();

    for (let i = 0; i < n; i++) {
        if (i > 0) prev[i] = i - 1;
        if (i < n - 1) next[i] = i + 1;
    }

    let inv = 0;
    for (let i = 0; i < n - 1; i++) {
        const s = nums[i] + nums[i + 1];
        currentSums[i] = s;
        sl.push([s, i]);
        if (nums[i] > nums[i + 1]) {
            inv++;
        }
    }

    let ans = 0;
    while (inv > 0) {
        ans++;
        let s, i;

        while (true) {
            const item = sl.pop();
            if (!item) break;
            [s, i] = item;
            if (currentSums[i] === s) break;
        }

        const j = next[i];

        if (nums[i] > nums[j]) inv--;

        const h = prev[i];
        if (h !== -1) {
            if (nums[h] > nums[i]) inv--;
            if (nums[h] > s) inv++;
            const newSumH = nums[h] + s;
            currentSums[h] = newSumH;
            sl.push([newSumH, h]);
        }

        const k = next[j];
        if (k !== -1) {
            if (nums[j] > nums[k]) inv--;
            currentSums[j] = Infinity;

            if (s > nums[k]) inv++;
            const newSumI = s + nums[k];
            currentSums[i] = newSumI;
            sl.push([newSumI, i]);
        } else {
            currentSums[i] = Infinity;
        }

        nums[i] = s;
        next[i] = k;
        if (k !== -1) prev[k] = i;
    }
    return ans;
};
