/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let n = nums.length;
      let count1 = nums.reduce((a, b) => a + b, 0);
  
      if (count1 === 0) return 0;
      if (count1 === n) return 0;
  
      let max1InWindow = 0;
      let current1InWindow = 0;
  
      for (let i = 0; i < count1; i++) {
          if (nums[i] === 1) current1InWindow++;
      }
      max1InWindow = current1InWindow;
  
      for (let i = 1; i < n; i++) {
          if (nums[i - 1] === 1) current1InWindow--;
          if (nums[(i + count1 - 1) % n] === 1) current1InWindow++;
          max1InWindow = Math.max(max1InWindow, current1InWindow);
      }
  
      return count1 - max1InWindow;  
  };