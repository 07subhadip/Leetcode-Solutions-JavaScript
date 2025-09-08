/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ")

    const searchWordLen = searchWord.length

    for(let i = 0 ; i < words.length ; i++){
        if(words[i].length >= searchWordLen){
            if(words[i].substring(0,searchWordLen) === searchWord){
                return i+1
            }
        }
    }

    return -1
};