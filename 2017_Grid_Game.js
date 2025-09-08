/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let ans = Infinity
    let s1 = grid[0].reduce((acc,num)=>acc+num,0)
    let s2 = 0

    for(let i = 0; i< grid[0].length ;i++){
        s1 -= grid[0][i]
        ans = Math.min(ans , Math.max(s1,s2))
        s2 += grid[1][i]
    }

    return ans
};