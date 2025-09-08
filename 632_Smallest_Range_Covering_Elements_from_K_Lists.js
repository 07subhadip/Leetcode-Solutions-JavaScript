/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let n = 0;
    
    for (let v of nums) n += v.length;
    
    let t = new Array(n);
    let k = nums.length;
    
    for (let i = 0, j = 0; i < k; ++i) {
        for (let v of nums[i]) {
            t[j++] = [v, i];
        }
    }

    t.sort((a, b) => a[0] - b[0]);
    
    let j = 0;
    let cnt = new Map();
    let ans = [-1000000, 1000000];

    for (let i = 0; i < n; ++i) {
        let b = t[i][0];
        let v = t[i][1];
        
        cnt.set(v, (cnt.get(v) || 0) + 1);
        
        while (cnt.size === k) {
            let a = t[j][0];
            let w = t[j][1];
            
            let x = b - a - (ans[1] - ans[0]);
            if (x < 0 || (x === 0 && a < ans[0])) {
                ans[0] = a;
                ans[1] = b;
            }
            
            cnt.set(w, cnt.get(w) - 1);
            if (cnt.get(w) === 0) {
                cnt.delete(w);
            }
            ++j;
        }
    }
    
    return ans;
};
