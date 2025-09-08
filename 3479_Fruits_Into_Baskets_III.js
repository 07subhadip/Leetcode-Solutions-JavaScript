class SegmentTree {
    constructor(nums) {
        this.nums = nums;
        const n = nums.length;
        this.tr = new Array(n * 4).fill(0);
        this.build(1, 1, n);
    }

    build(u, l, r) {
        if (l === r) {
            this.tr[u] = this.nums[l - 1];
            return;
        }
        const mid = (l + r) >> 1;
        this.build(u * 2, l, mid);
        this.build(u * 2 + 1, mid + 1, r);
        this.pushup(u);
    }

    modify(u, l, r, i, v) {
        if (l === r) {
            this.tr[u] = v;
            return;
        }
        const mid = (l + r) >> 1;
        if (i <= mid) {
            this.modify(u * 2, l, mid, i, v);
        } else {
            this.modify(u * 2 + 1, mid + 1, r, i, v);
        }
        this.pushup(u);
    }

    query(u, l, r, v) {
        if (this.tr[u] < v) {
            return -1;
        }
        if (l === r) {
            return l;
        }
        const mid = (l + r) >> 1;
        if (this.tr[u * 2] >= v) {
            return this.query(u * 2, l, mid, v);
        }
        return this.query(u * 2 + 1, mid + 1, r, v);
    }

    pushup(u) {
        this.tr[u] = Math.max(this.tr[u * 2], this.tr[u * 2 + 1]);
    }
}

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    const tree = new SegmentTree(baskets);
    const n = baskets.length;
    let ans = 0;
    for (const x of fruits) {
        const i = tree.query(1, 1, n, x);
        if (i < 0) {
            ans++;
        } else {
            tree.modify(1, 1, n, i, 0);
        }
    }
    return ans;
};