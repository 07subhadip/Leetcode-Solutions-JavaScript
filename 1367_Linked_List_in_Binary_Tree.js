/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Helper function for depth-first search
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const dfs = function(head, root) {
    if (head == null) {
        return true;
    }
    if (root == null || head.val !== root.val) {
        return false;
    }
    return dfs(head.next, root.left) || dfs(head.next, root.right);
};

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if (root == null) {
        return false;
    }
    return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
