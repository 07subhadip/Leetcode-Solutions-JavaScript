/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let totalDrunk = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        empty -= numExchange;
        numExchange++;
        totalDrunk++;
        empty++;
    }

    return totalDrunk;
};