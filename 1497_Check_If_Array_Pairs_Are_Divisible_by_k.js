/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const cnt = new Array(k).fill(0);

   for (let x of arr) {
       cnt[((x % k) + k) % k]++;
   }

   for (let i = 1; i < k; ++i) {
       if (cnt[i] !== cnt[k - i]) {
           return false;
       }
   }

   return cnt[0] % 2 === 0;
};