/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const m = points.length;
    const n = points[0].length;
    
    let dp = points[0].slice();
    
    for (let i = 1; i < m; i++) {
        const newDp = new Array(n).fill(0);
        
        let maxFromLeft = dp[0];
        for (let j = 0; j < n; j++) {
            maxFromLeft = Math.max(maxFromLeft, dp[j]);
            newDp[j] = maxFromLeft + points[i][j];
            if (j < n - 1) maxFromLeft -= 1;
        }
        
        let maxFromRight = dp[n - 1];
        for (let j = n - 1; j >= 0; j--) {
            maxFromRight = Math.max(maxFromRight, dp[j]);
            newDp[j] = Math.max(newDp[j], maxFromRight + points[i][j]);
            if (j > 0) maxFromRight -= 1;
        }
        
        dp = newDp;
    }
    
    return Math.max(...dp);
};