/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    var countMap = {};

    for (var i = 0; i < answers.length; i++) {
        var a = answers[i];

        if (countMap[a] === undefined) {
            countMap[a] = 1;
        }
        else {
            countMap[a] = countMap[a] + 1;
        }
    }

    var totalRabbits = 0;

    for (var answerValue in countMap) {
        if (countMap.hasOwnProperty(answerValue)) {
            var a = parseInt(answerValue, 10);
            var numWhoSaidA = countMap[answerValue];

            var groupSize = a + 1;

            var fullGroupsNeeded = Math.floor(numWhoSaidA / groupSize);
            var leftover = numWhoSaidA % groupSize;

            if (leftover > 0) {
                fullGroupsNeeded = fullGroupsNeeded + 1;
            }

            totalRabbits = totalRabbits + (fullGroupsNeeded * groupSize);
        }
    }

    return totalRabbits;
};