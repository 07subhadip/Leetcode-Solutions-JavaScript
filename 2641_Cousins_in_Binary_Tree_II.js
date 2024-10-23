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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    const s = [];

    const dfs1 = function(root, depth) {
        if (!root) {
            return;
        }
        if (s.length <= depth) {
            s.push(0);
        }
        s[depth] += root.val;
        dfs1(root.left, depth + 1);
        dfs1(root.right, depth + 1);
    };

    const dfs2 = function(root, depth) {
        const sub = (root.left ? root.left.val : 0) + (root.right ? root.right.val : 0);
        ++depth;
        if (root.left) {
            root.left.val = s[depth] - sub;
            dfs2(root.left, depth);
        }
        if (root.right) {
            root.right.val = s[depth] - sub;
            dfs2(root.right, depth);
        }
    };

    dfs1(root, 0);
    root.val = 0;
    dfs2(root, 0);
    return root;
};
