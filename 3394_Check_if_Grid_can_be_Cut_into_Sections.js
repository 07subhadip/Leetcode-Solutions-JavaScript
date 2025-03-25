/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
    function canPartition(rectangles, sortKeyStart, sortKeyEnd) {
        const m = rectangles.length;
        let arr = rectangles.slice().sort((a, b) => {
            if (a[sortKeyEnd] === b[sortKeyEnd]) {
                return a[sortKeyStart] - b[sortKeyStart];
            }
            return a[sortKeyEnd] - b[sortKeyEnd];
        });

        const minStart = Array(m);
        minStart[m - 1] = arr[m - 1][sortKeyStart];
        
        for (let i = m - 2; i >= 0; i--) {
            minStart[i] = Math.min(arr[i][sortKeyStart], minStart[i + 1]);
        }

        for (let i = 0; i < m - 2; i++) {
            if (arr[i][sortKeyEnd] <= minStart[i + 1]) {
                for (let j = i + 1; j < m - 1; j++) {
                    if (arr[j][sortKeyEnd] <= minStart[j + 1]) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    if (canPartition(rectangles, 1, 3)) return true;

    if (canPartition(rectangles, 0, 2)) return true;

    return false;
};