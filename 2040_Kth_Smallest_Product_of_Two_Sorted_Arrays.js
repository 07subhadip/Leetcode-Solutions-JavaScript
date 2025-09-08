/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
    const m = nums1.length;
    const n = nums2.length;

    const a = BigInt(Math.max(Math.abs(nums1[0]), Math.abs(nums1[m - 1])));
    const b = BigInt(Math.max(Math.abs(nums2[0]), Math.abs(nums2[n - 1])));

    let l = -a * b;
    let r = a * b;

    const count = (p) => {
        let cnt = 0n;
        for (const x of nums1) {
            const bx = BigInt(x);
            if (bx > 0n) {
                let lo = 0, hi = n;
                while (lo < hi) {
                    const mid = (lo + hi) >> 1;
                    const prod = bx * BigInt(nums2[mid]);
                    if (prod > p) {
                        hi = mid;
                    } else {
                        lo = mid + 1;
                    }
                }
                cnt += BigInt(lo);
            } else if (bx < 0n) {
                let lo = 0, hi = n;
                while (lo < hi) {
                    const mid = (lo + hi) >> 1;
                    const prod = bx * BigInt(nums2[mid]);
                    if (prod <= p) {
                        hi = mid;
                    } else {
                        lo = mid + 1;
                    }
                }
                cnt += BigInt(n - lo);
            } else if (p >= 0n) {
                cnt += BigInt(n);
            }
        }
        return cnt;
    };

    while (l < r) {
        const mid = (l + r) >> 1n;
        if (count(mid) >= BigInt(k)) {
            r = mid;
        } else {
            l = mid + 1n;
        }
    }

    return Number(l);
};