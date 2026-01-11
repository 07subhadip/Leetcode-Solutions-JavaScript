/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = (matrix) => {
    if (!matrix.length) return 0;
    const n = matrix[0].length;
    const heights = new Array(n).fill(0);
    let ans = 0;

    for (const row of matrix) {
        for (let j = 0; j < n; ++j) {
            if (row[j] === "1") {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        ans = Math.max(ans, largestRectangleArea(heights));
    }

    return ans;
};

const largestRectangleArea = (heights) => {
    let res = 0;
    const n = heights.length;
    const stk = [];
    const left = new Array(n);
    const right = new Array(n).fill(n);

    for (let i = 0; i < n; ++i) {
        while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
            right[stk.pop()] = i;
        }
        left[i] = stk.length === 0 ? -1 : stk[stk.length - 1];
        stk.push(i);
    }

    for (let i = 0; i < n; ++i) {
        res = Math.max(res, heights[i] * (right[i] - left[i] - 1));
    }

    return res;
};
