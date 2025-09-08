/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0
    let bestLeftScore = values[0] + 0

    for(let i = 1 ; i < values.length ; i++){
        let currentScore = bestLeftScore + (values[i] - i)
        maxScore = Math.max(maxScore, currentScore)
        bestLeftScore = Math.max(bestLeftScore , values[i] + i)
    }

    return maxScore
};