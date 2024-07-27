/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const n = source.length;
    const INF = Infinity;
    
    const costs = Array.from({ length: 26 }, () => Array(26).fill(INF));
    
    for (let i = 0; i < 26; i++) {
        costs[i][i] = 0;
    }
    
    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        costs[from][to] = Math.min(costs[from][to], cost[i]);
    }
    
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (costs[i][k] < INF && costs[k][j] < INF) {
                    costs[i][j] = Math.min(costs[i][j], costs[i][k] + costs[k][j]);
                }
            }
        }
    }
    
    let totalCost = 0;
    
    for (let i = 0; i < n; i++) {
        const srcChar = source.charCodeAt(i) - 'a'.charCodeAt(0);
        const tgtChar = target.charCodeAt(i) - 'a'.charCodeAt(0);
        
        if (costs[srcChar][tgtChar] === INF) {
            return -1;  
        }
        
        totalCost += costs[srcChar][tgtChar];
    }
    
    return totalCost;
};