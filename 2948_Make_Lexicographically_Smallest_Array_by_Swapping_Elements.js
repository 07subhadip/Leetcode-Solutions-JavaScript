/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length;
  const sortedNums = [...nums].sort((a, b) => a - b);
  const groups = [];
  let currentGroupStart = 0;

  for (let i = 1; i < n; i++) {
    if (sortedNums[i] - sortedNums[i - 1] > limit) {
      groups.push({ start: currentGroupStart, end: i - 1 });
      currentGroupStart = i;
    }
  }
  groups.push({ start: currentGroupStart, end: n - 1 });

  const groupStarts = groups.map((g) => g.start);

  const findGroupIndex = (pos) => {
    let left = 0,
      right = groupStarts.length - 1;
    let ans = 0;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (groupStarts[mid] <= pos) {
        ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return ans;
  };

  const groupIndices = Array.from({ length: groups.length }, () => []);
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    let low = 0,
      high = n;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (sortedNums[mid] < x) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    const pos = low;
    const groupIdx = findGroupIndex(pos);
    groupIndices[groupIdx].push(i);
  }

  const result = new Array(n);
  for (let groupIdx = 0; groupIdx < groups.length; groupIdx++) {
    const { start, end } = groups[groupIdx];
    const indices = groupIndices[groupIdx];
    if (indices.length === 0) continue;
    indices.sort((a, b) => a - b);
    const elements = sortedNums.slice(start, end + 1);
    for (let i = 0; i < indices.length; i++) {
      result[indices[i]] = elements[i];
    }
  }

  return result;
};
