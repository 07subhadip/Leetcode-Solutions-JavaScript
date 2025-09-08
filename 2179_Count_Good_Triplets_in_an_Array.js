/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function (nums1, nums2) {
    const n = nums1.length;

    const pos = new Array(n);
    for (let i = 0; i < n; i++) {
        pos[nums2[i]] = i;
    }

    const P = new Array(n);
    for (let i = 0; i < n; i++) {
        P[i] = pos[nums1[i]];
    }

    function BIT(size) {
        const tree = new Array(size + 1).fill(0);
        return {
            update: function (i, delta) {
                for (i++; i <= size; i += i & -i) {
                    tree[i] += delta;
                }
            },
            query: function (i) {
                let sum = 0;
                for (i++; i > 0; i -= i & -i) {
                    sum += tree[i];
                }
                return sum;
            }
        }
    }

    const left = new Array(n).fill(0);
    const bitLeft = BIT(n);
    for (let i = 0; i < n; i++) {
        left[i] = bitLeft.query(P[i] - 1);
        bitLeft.update(P[i], 1);
    }

    const right = new Array(n).fill(0);
    const bitRight = BIT(n);
    for (let i = n - 1; i >= 0; i--) {
        right[i] = bitRight.query(n - 1) - bitRight.query(P[i]);
        bitRight.update(P[i], 1);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += left[i] * right[i];
    }

    return ans;
};