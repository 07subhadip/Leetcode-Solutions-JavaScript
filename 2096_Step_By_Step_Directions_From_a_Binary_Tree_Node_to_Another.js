/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var getDirections = function(root, startValue, destValue) {
    function findPath(root, target, path) {
        if (!root) return false;
        if (root.val === target) return true;

        path.push('L');
        if (findPath(root.left, target, path)) return true;
        path.pop();

        path.push('R');
        if (findPath(root.right, target, path)) return true;
        path.pop();

        return false;
    }

    let pathToStart = [];
    let pathToDest = [];
    findPath(root, startValue, pathToStart);
    findPath(root, destValue, pathToDest);

    let i = 0;
    while (i < pathToStart.length && i < pathToDest.length && pathToStart[i] === pathToDest[i]) {
        i++;
    }

    let stepsUp = 'U'.repeat(pathToStart.length - i);
    let stepsDown = pathToDest.slice(i).join('');

    return stepsUp + stepsDown;
};