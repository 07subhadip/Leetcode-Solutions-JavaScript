/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    class Robot {
        constructor(index, position, health, direction) {
            this.index = index;
            this.position = position;
            this.health = health;
            this.direction = direction;
        }
    }

    const robots = [];
    const stack = [];  // the running robots

    for (let i = 0; i < positions.length; i++) {
        robots.push(new Robot(i, positions[i], healths[i], directions[i]));
    }

    // Sort robots by position
    robots.sort((a, b) => a.position - b.position);

    for (const robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot);
            continue;
        }
        
        // Collide with robots going right if any
        while (stack.length > 0 && stack[stack.length - 1].direction === 'R' && robot.health > 0) {
            const topRobot = stack[stack.length - 1];
            if (topRobot.health === robot.health) {
                stack.pop();
                robot.health = 0;
            } else if (topRobot.health < robot.health) {
                stack.pop();
                robot.health -= 1;
            } else {  // topRobot.health > robot.health
                topRobot.health -= 1;
                robot.health = 0;
            }
        }
        
        if (robot.health > 0) {
            stack.push(robot);
        }
    }

    // Sort survivors by their original index
    stack.sort((a, b) => a.index - b.index);

    // Collect and return the health of surviving robots
    return stack.map(robot => robot.health);
};