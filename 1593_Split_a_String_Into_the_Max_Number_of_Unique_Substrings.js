/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let vis = new Set();
    let ans = 1;
    
    const dfs = (i, t) => {
        if (i >= s.length) {
            ans = Math.max(ans, t);
            return;
        }
        
        for (let j = i + 1; j <= s.length; ++j) {
            let x = s.substring(i, j);
            if (!vis.has(x)) {
                vis.add(x);
                dfs(j, t + 1);
                vis.delete(x);
            }
        }
    };
    
    dfs(0, 0);
    
    return ans;
};
