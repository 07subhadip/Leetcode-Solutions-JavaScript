/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
    const ops = ['+', '-', '*', '/'];

    const dfs = (nums) => {
        const n = nums.length;
        if (n === 1) {
            return Math.abs(nums[0] - 24) < 1e-6;
        }
        let ok = false;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    const nxt = [];
                    for (let k = 0; k < n; k++) {
                        if (k !== i && k !== j) {
                            nxt.push(nums[k]);
                        }
                    }
                    for (const op of ops) {
                        switch (op) {
                            case '/':
                                if (nums[j] === 0) {
                                    continue;
                                }
                                nxt.push(nums[i] / nums[j]);
                                break;
                            case '*':
                                nxt.push(nums[i] * nums[j]);
                                break;
                            case '+':
                                nxt.push(nums[i] + nums[j]);
                                break;
                            case '-':
                                nxt.push(nums[i] - nums[j]);
                                break;
                        }
                        ok = ok || dfs(nxt);
                        if (ok) {
                            return true;
                        }
                        nxt.pop();
                    }
                }
            }
        }
        return ok;
    };

    return dfs(cards);
};