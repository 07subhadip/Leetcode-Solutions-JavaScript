class Node {
    l = 0;
    r = 0;
    cnt = 0;
    length = 0;
}

class SegmentTree {
    constructor(nums) {
        this.nums = nums;
        const n = nums.length - 1;
        this.tr = Array.from({ length: n << 2 }, () => new Node());
        this.build(1, 0, n - 1);
    }

    build(u, l, r) {
        this.tr[u].l = l;
        this.tr[u].r = r;
        if (l !== r) {
            const mid = (l + r) >> 1;
            this.build(u << 1, l, mid);
            this.build((u << 1) | 1, mid + 1, r);
        }
    }

    modify(u, l, r, k) {
        if (l > r) return;
        if (this.tr[u].l >= l && this.tr[u].r <= r) {
            this.tr[u].cnt += k;
        } else {
            const mid = (this.tr[u].l + this.tr[u].r) >> 1;
            if (l <= mid) this.modify(u << 1, l, r, k);
            if (r > mid) this.modify((u << 1) | 1, l, r, k);
        }
        this.pushup(u);
    }

    pushup(u) {
        if (this.tr[u].cnt > 0) {
            this.tr[u].length =
                this.nums[this.tr[u].r + 1] - this.nums[this.tr[u].l];
        } else if (this.tr[u].l === this.tr[u].r) {
            this.tr[u].length = 0;
        } else {
            this.tr[u].length =
                this.tr[u << 1].length + this.tr[(u << 1) | 1].length;
        }
    }

    query() {
        return this.tr[1].length;
    }
}

/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
    const xsSet = new Set();
    const segs = [];
    for (const [x1, y1, l] of squares) {
        const [x2, y2] = [x1 + l, y1 + l];
        xsSet.add(x1);
        xsSet.add(x2);
        segs.push([y1, x1, x2, 1]);
        segs.push([y2, x1, x2, -1]);
    }
    segs.sort((a, b) => a[0] - b[0]);
    const xs = Array.from(xsSet);
    xs.sort((a, b) => a - b);
    const tree = new SegmentTree(xs);
    const d = new Map();
    for (let i = 0; i < xs.length; i++) {
        d.set(xs[i], i);
    }
    let area = 0.0;
    let y0 = 0;
    for (const [y, x1, x2, k] of segs) {
        area += (y - y0) * tree.query();
        tree.modify(1, d.get(x1), d.get(x2) - 1, k);
        y0 = y;
    }
    const target = area / 2.0;
    area = 0.0;
    y0 = 0;
    for (const [y, x1, x2, k] of segs) {
        const curLen = tree.query();
        const t = (y - y0) * curLen;
        if (area + t >= target) {
            return y0 + (target - area) / curLen;
        }
        area += t;
        tree.modify(1, d.get(x1), d.get(x2) - 1, k);
        y0 = y;
    }
    return 0.0;
};
