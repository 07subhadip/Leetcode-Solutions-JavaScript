/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = new Map();
    
    const dfs = (exp) => {
        if (memo.has(exp)) return memo.get(exp);
        if (exp.length < 3) return [parseInt(exp)];
        
        const ans = [];
        const n = exp.length;
        
        for (let i = 0; i < n; ++i) {
            const c = exp[i];
            
            if (c === '-' || c === '+' || c === '*') {
                const left = dfs(exp.substring(0, i));
                const right = dfs(exp.substring(i + 1, n));
                
                for (let a of left) {
                    for (let b of right) {
                        if (c === '-') {
                            ans.push(a - b);
                        } else if (c === '+') {
                            ans.push(a + b);
                        } else {
                            ans.push(a * b);
                        }
                    }
                }
            }
        }
        
        memo.set(exp, ans);
        return ans;
    };
    
    return dfs(expression);
};
