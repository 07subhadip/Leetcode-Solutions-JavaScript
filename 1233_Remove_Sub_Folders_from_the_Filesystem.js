/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    
    let ans = [folder[0]];
    
    for (let i = 1; i < folder.length; ++i) {
        let m = ans[ans.length - 1].length;
        let n = folder[i].length;
        
        if (m >= n || !(ans[ans.length - 1] === folder[i].substring(0, m) && folder[i][m] === '/')) {
            ans.push(folder[i]);
        }
    }
    
    return ans;
};