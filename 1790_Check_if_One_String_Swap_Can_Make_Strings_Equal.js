function swap(str,i,j){
    let arr = [...str]
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr.join("")
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1===s2) return true
    if(s1.length !== s2.length) return false
    let indices = []

    for(let i = 0 ; i < s1.length ; i++){
        if(s1[i] !== s2[i]){
            indices.push(i)
        }
    }

    if(indices.length > 2 || indices.length === 1) return false
    
    return swap(s2,indices[0],indices[1]) === s1
};