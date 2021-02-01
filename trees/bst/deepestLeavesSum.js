// 1302. Deepest Leaves Sum
// Given a binary tree, return the sum of values of its deepest leaves.


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15



 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if (!root){
        return 0;
    }
    
    let cache = [];

    const recursion = (root, depth = 0) => {
        if (!root) return 0;

        cache[depth] = (cache[depth] || 0) + root.val;

        recursion(root.left, depth + 1);
        recursion(root.right, depth + 1);

    }

    recursion(root);
    return cache[cache.length -1];
};