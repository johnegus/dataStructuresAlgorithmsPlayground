// 938. Range Sum of BST
// Easy

// Share
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// let rangeSumBST = function(root, low, high) {
    
//     let cache = 0;
//     recursion (root, low, high)
//     return cache
   
    
// };

// let recursion = (node, low, high) => {
//     if (!node) return null;

//     if (node.val >= low && node.val <= high){
//         cache += node.value
//     }
    
//     if (node.val > low){
//         recursion(node.left, low, high)
//     }

//     if (node.val < high){
//         recursion(node.right, low, high)
//     }
// }

let rangeSumBST = function(root, low, high) {
    let sum = 0;
    if (!root){
        return sum
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high)
    }

    if(root.val < high){
        sum += rangeSumBST(root.right, low, high)
    }

    if (root.val <= high && root.val >= low){
        sum += root.val
    }

    return sum
}