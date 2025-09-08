// Solution 1 : Beats 88% users on Runtime

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

//Solution 2 : Beats 100% of the users on Runtime

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    const ballMap = new Map();
    const colorMap = new Map();
    return queries.map(([ball, color]) => {
        if (ballMap.has(ball)) {
            const prevColor = ballMap.get(ball);
            colorMap.set(prevColor, colorMap.get(prevColor) - 1);
            if (colorMap.get(prevColor) === 0) colorMap.delete(prevColor);
        }
        ballMap.set(ball, color);
        colorMap.set(color, (colorMap.get(color) ?? 0) + 1);
        return colorMap.size;
    });
};