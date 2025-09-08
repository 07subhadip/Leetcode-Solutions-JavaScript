/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0

    for(let val of words){
        if(val.startsWith(pref)) count++
    }

    return count
};