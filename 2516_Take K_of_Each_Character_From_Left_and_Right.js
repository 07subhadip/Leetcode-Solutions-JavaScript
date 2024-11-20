/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const idx = c => c.charCodeAt(0) - 97;
    const cnt = Array(3).fill(0); 
    
    for (const c of s) {
        ++cnt[idx(c)];
    }
    
    if (cnt.some(v => v < k)) {
        return -1;
    }
    
    const n = s.length;
    let mx = 0, j = 0; 
    
    for (let i = 0; i < n; ++i) {
        const c = idx(s[i]);
        --cnt[c]; 
        
        while (cnt[c] < k) {
            ++cnt[idx(s[j++])];
        }
        
        mx = Math.max(mx, i - j + 1); 
    }
    
    return n - mx;
};