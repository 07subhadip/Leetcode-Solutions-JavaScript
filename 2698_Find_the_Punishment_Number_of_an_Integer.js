/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let total = 0;
    
    const canPartition = (s, idx, currentSum, target) => {
        if (idx === s.length) {
            return currentSum === target;
        }
        for (let i = idx; i < s.length; i++) {
            let part = s.substring(idx, i + 1);
            let num = parseInt(part, 10);
            if (currentSum + num > target) continue;
            if (canPartition(s, i + 1, currentSum + num, target)) {
                return true;
            }
        }
        return false;
    };

    for (let i = 1; i <= n; i++) {
        let squareStr = String(i * i);
        if (canPartition(squareStr, 0, 0, i)) {
            total += i * i;
        }
    }
    
    return total;
};