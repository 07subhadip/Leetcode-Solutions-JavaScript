/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    let res = 0

        intervals.sort((a, b) => {
            if (a[1] === b[1]) return b[0] - a[0]
            return a[1] - b[1]
        })

        let p1 = -1, p2 = -1

        for (let [left, right] of intervals) {
            if (p2 < left) {
                res += 2
                p1 = right - 1
                p2 = right
            } else if (p1 < left) {
                res += 1
                p1 = p2
                p2 = right
            }
        }

        return res
};