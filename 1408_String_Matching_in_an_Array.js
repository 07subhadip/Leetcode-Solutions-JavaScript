/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let ans = []
    for(let i = 0 ; i < words.length ; i++){
        for(let j = 0 ; j < words.length ; j++){
            if(i===j) {
                continue
            }else if(words[j].includes(words[i]) && !ans.includes(words[i])){
                ans.push(words[i])
            }
        }
    }

    return ans
};