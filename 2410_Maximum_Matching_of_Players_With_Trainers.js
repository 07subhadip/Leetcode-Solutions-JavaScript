/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let matches = 0;
    let j = 0;

    for (let i = 0; i < players.length && j < trainers.length; i++) {
        while (j < trainers.length && trainers[j] < players[i]) {
            j++;
        }
        if (j < trainers.length) {
            matches++;
            j++;
        }
    }

    return matches;
};