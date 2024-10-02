/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const t = [...arr].sort((a, b) => a - b);
    let m = 0;
    for (let i = 0; i < t.length; ++i) {
        if (i === 0 || t[i] !== t[i - 1]) {
            t[m++] = t[i];
        }
    }
    const search = function(t, right, x) {
        let left = 0;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (t[mid] > x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
    const ans = [];
    for (const x of arr) {
        ans.push(search(t, m, x));
    }
    return ans;
};