/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) {
        return false;
    }

    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let hasVowel = false;
    let hasConsonant = false;
    let isValidCharacter = true;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        const isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
        const isDigit = (char >= '0' && char <= '9');

        if (!isLetter && !isDigit) {
            isValidCharacter = false;
            break;
        }

        if (isLetter) {
            if (VOWELS.has(char)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return isValidCharacter && hasVowel && hasConsonant;
};