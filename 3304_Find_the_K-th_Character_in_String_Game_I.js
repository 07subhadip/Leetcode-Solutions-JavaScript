/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    const word = [0];
    while (word.length < k) {
        word.push(...word.map(x => (x + 1) % 26));
    }
    return String.fromCharCode(97 + word[k - 1]);
};