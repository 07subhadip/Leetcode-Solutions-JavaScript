/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    const idx = _.sortedIndex(letters, target + '\0');
    return letters[idx % letters.length];
};