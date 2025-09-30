/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        let newFull = Math.floor(emptyBottles / numExchange);
        totalDrunk += newFull;
        emptyBottles = emptyBottles % numExchange + newFull;
    }

    return totalDrunk;
};