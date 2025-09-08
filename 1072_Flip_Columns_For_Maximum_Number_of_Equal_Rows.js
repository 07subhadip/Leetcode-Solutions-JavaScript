/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const cnt = new Map()
    let ans = 0

    for(const row of matrix){
        if(row[0]===1){
            for(let i = 0 ; i<row.length;i++){
                row[i]^=1
            }
        }

        const s = row.join('')
        cnt.set(s,(cnt.get(s)||0)+1)
        ans = Math.max(ans,cnt.get(s))
    }

    return ans
};