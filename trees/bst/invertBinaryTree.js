// 226. Invert Binary Tree
// Easy


// Share
// Given the root of a binary tree, invert the tree, and return its root.



// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]


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
 var invertTree = function(root) {
    if (!root) {
        return root;
    }

    let left = invertTree(root.left)
    let right = invertTree(root.right)

    root.right = left
    root.left = right

    return root;
};