/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const mod = 1e9 + 7
    let f = [1, 0, 0, 0]
    
    for (let i = 1; i <= n; i++) {
        let g = [0, 0, 0, 0]
        g[0] = (f[0] + f[1] + f[2] + f[3]) % mod
        g[1] = (f[2] + f[3]) % mod
        g[2] = (f[1] + f[3]) % mod
        g[3] = f[0]
        f = [...g]
    }

    return f[0]
};

//Solution 2 : Reduced Time of Execution

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    if(n === 3) return 5

    const MOD = 1e9 + 7
    const dp = new Array(n + 1).fill(0)

    dp[1] = 1
    dp[2] = 2
    dp[3] = 5

    for(let i = 4; i <= n ; i++){
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    }

    return dp[n]
};