// 1351. Count Negative Numbers in a Sorted Matrix
// Easy

// Share
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

let grid2 = [
  [3, 2],
  [1, 0],
];
// Output: 0
// Example 3:

let grid3 = [
  [1, -1],
  [-1, -1],
];
// Output: 3
// Example 4:

let grid4 = [[-1]];
// Output: 1

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

// Follow up: Could you find an O(n + m) solution?

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const array = grid[i];
    for (let j = array.length - 1; j >= 0; j--) {
      const number = array[j];
      if (number >= 0) {
        break;
      } else {
        count++;
      }
    }
  }

  return count;
};

console.log(countNegatives(grid));
console.log(countNegatives(grid2));
console.log(countNegatives(grid3));
console.log(countNegatives(grid4));
