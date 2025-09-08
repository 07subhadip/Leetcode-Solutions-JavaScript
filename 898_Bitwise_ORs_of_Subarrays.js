/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
    const ans = new Set();
    const s = new Set();

    for (const x of arr) {
        const t = new Set([x]);

        for (const y of s) {
            t.add(x | y);
        }

        s.clear();

        for (const y of t) {
            ans.add(y);
            s.add(y);
        }
    }

    return ans.size;
};