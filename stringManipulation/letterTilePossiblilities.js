// 1079. Letter Tile Possibilities
// Medium

// Share
// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

// Example 1:

let tiles = "AAB";
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:

// Input: tiles = "AAABBC"
// Output: 188
// Example 3:

// Input: tiles = "V"
// Output: 1

// Constraints:

// 1 <= tiles.length <= 7
// tiles consists of uppercase English letters.

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let array = [];
  for (let index = 0; index < tiles.length; index++) {
    const element = tiles[index];
    array.push(element);
    for (let index = 0; index < tiles.length; index++) {
      const element2 = tiles[index];
    }
  }
  return tiles;
};

console.log(numTilePossibilities(tiles));
