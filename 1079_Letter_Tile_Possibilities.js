/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    const freq = {};
    for (let ch of tiles) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let count = 0;

    function backtrack() {
        for (let ch in freq) {
            if (freq[ch] > 0) {
                count++;
                freq[ch]--;
                backtrack();
                freq[ch]++;
            }
        }
    }

    backtrack();
    return count;
};