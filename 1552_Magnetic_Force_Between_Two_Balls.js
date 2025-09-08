/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    
    let n = position.length;
    let left = 1, right = position[n - 1] - position[0];
    let result = 0;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (canPlaceBalls(position, m, mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};
function canPlaceBalls(position, m, minDist) {
    let count = 1;
    let lastPosition = position[0];
    
    for (let i = 1; i < position.length; i++) {
        if (position[i] - lastPosition >= minDist) {
            count++;
            lastPosition = position[i];
            if (count >= m) {
                return true;
            }
        }
    }
    
    return false;
}