/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    const ballToColorMap = new Map();
    const colorFreqMap = new Map();
    const result = [];

    for (const [ball, color] of queries) {
        if (!ballToColorMap.has(ball)) {
            ballToColorMap.set(ball, color);
            colorFreqMap.set(color, (colorFreqMap.get(color) || 0) + 1);
        } else {
            const oldColor = ballToColorMap.get(ball);
            if (oldColor !== color) {
                const oldCount = colorFreqMap.get(oldColor);
                if (oldCount === 1) {
                    colorFreqMap.delete(oldColor);
                } else {
                    colorFreqMap.set(oldColor, oldCount - 1);
                }
                ballToColorMap.set(ball, color);
                colorFreqMap.set(color, (colorFreqMap.get(color) || 0) + 1);
            }
        }
        result.push(colorFreqMap.size);
    }

    return result;
};