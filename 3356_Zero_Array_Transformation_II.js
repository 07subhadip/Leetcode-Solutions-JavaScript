/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
    const n = nums.length;
    const m = queries.length;

    const canZero = (k) => {
        const diff = new Array(n + 1).fill(0);

        for (let j = 0; j < k; j++) {
            let [l, r, v] = queries[j];
            diff[l] += v;
            if (r + 1 < n) {
                diff[r + 1] -= v;
            }
        }

        let curr = 0;

        for (let i = 0; i < n; i++) {
            curr += diff[i];
            if (curr < nums[i]) return false;
        }

        return true;
    };

    if (!canZero(m)) return -1;

    let lo = 0, hi = m;

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (canZero(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};