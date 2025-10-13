/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    if (words.length === 0) return words;

    const result = [words[0]];

    for (let i = 1; i < words.length; i++) {
        const lastKept = result[result.length - 1];
        const current = words[i];

        if (!isAnagram(lastKept, current)) {
            result.push(current);
        }
    }

    return result;
};

const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}