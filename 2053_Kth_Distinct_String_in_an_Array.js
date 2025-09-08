/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const seen = new Set()
    const duplicate = new Set()

    for(let item of arr){
        if(seen.has(item)){
            duplicate.add(item)
        }else{
            seen.add(item)
        }
    } 

    const duplicateItems = [...seen].filter((item)=> !duplicate.has(item))

    if(duplicateItems.length>=k){
        return duplicateItems[k-1]
    }else{
        return ""
    }
};