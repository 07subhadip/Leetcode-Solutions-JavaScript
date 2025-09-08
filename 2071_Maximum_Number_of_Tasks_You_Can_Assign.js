/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function(tasks, workers, pills, strength) {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);

    const canAssign = (k) => {
        const deque = [];
        let i = 0;
        let j = workers.length - k;
        let p = pills;

        for (let w = workers.length - k; w < workers.length; w++) {
            while (i < k && tasks[i] <= workers[w] + strength) {
                deque.push(tasks[i]);
                i++;
            }

            if (deque.length === 0) return false;

            if (deque[0] <= workers[w]) {
                deque.shift();
            } else if (p > 0) {
                deque.pop();
                p--;
            } else {
                return false;
            }
        }

        return true;
    };

    let left = 0, right = Math.min(tasks.length, workers.length);
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (canAssign(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};