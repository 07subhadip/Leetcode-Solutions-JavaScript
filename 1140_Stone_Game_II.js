/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    const suffixSum = Array(n).fill(0);
    
    suffixSum[n-1] = piles[n-1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i+1] + piles[i];
    }
    
    function helper(i, M) {
        if (i >= n) return 0;
        if (2 * M >= n - i) return suffixSum[i];
        if (dp[i][M] !== 0) return dp[i][M];
        
        let minOpponentStones = Infinity;
        for (let x = 1; x <= 2 * M; x++) {
            minOpponentStones = Math.min(minOpponentStones, helper(i + x, Math.max(M, x)));
        }
        
        dp[i][M] = suffixSum[i] - minOpponentStones;
        return dp[i][M];
    }
    
    return helper(0, 1);
};