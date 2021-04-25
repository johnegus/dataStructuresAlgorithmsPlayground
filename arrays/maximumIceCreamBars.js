// 1833. Maximum Ice Cream Bars
// Medium

// Share
// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.

// Example 1:

let costs = [1, 3, 2, 4, 1],
  coins = 7;
// Output: 4
// Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
// Example 2:

let costs2 = [10, 6, 8, 7, 7, 8],
  coins2 = 5;
// Output: 0
// Explanation: The boy cannot afford any of the ice cream bars.
// Example 3:

let costs3 = [1, 6, 3, 1, 2, 5],
  coins3 = 20;
// Output: 6
// Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.

// Constraints:

// costs.length == n
// 1 <= n <= 105
// 1 <= costs[i] <= 105
// 1 <= coins <= 108

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  // sort the costs array
  costs.sort((a, b) => a - b);
  // make an output counter
  let output = 0;

  //iterate through the sorted costs
  for (let index = 0; index < costs.length; index++) {
    const cost = costs[index];
    //if the cost is less than or equal to the coins, subtract the cost from the coins, and add 1 to the output
    if (cost <= coins) {
      coins -= cost;
      output++;
    }
  }

  return output;
};

console.log(maxIceCream(costs, coins));
console.log(maxIceCream(costs2, coins2));
console.log(maxIceCream(costs3, coins3));