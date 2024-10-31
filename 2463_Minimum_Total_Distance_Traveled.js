/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);
    let f = Array.from({ length: robot.length }, () => Array(factory.length).fill(0));
    
    const dfs = (i, j) => {
        if (i === robot.length) return 0;
        if (j === factory.length) return 1e15;
        if (f[i][j]) return f[i][j];
        
        let ans = dfs(i, j + 1);
        let t = 0;
        
        for (let k = 0; k < factory[j][1]; ++k) {
            if (i + k >= robot.length) break;
            t += Math.abs(robot[i + k] - factory[j][0]);
            ans = Math.min(ans, t + dfs(i + k + 1, j + 1));
        }
        
        f[i][j] = ans;
        return ans;
    };
    
    return dfs(0, 0);
};