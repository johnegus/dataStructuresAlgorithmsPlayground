// 1475. Final Prices With a Special Discount in a Shop
// Easy

// Share
// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

// Example 1:

let prices = [8, 4, 6, 2, 3];
// Output: [4,2,4,2,3]
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.
// Example 2:

let prices2 = [1, 2, 3, 4, 5];
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.
// Example 3:

let prices3 = [10, 1, 1, 6];
// Output: [9,0,1,6]

// Constraints:

// 1 <= prices.length <= 500
// 1 <= prices[i] <= 10^3

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let output = [];
  for (let i = 0; i < prices.length; i++) {
    const element = prices[i];
    let discountedItem = element;
    for (let j = i + 1; j < prices.length; j++) {
      const element2 = prices[j];
      if (element2 <= element) {
        output.push(element - element2);
        break;
      }
      if (j === prices.length - 1 && !(element2 <= element)) {
        output.push(element);
      }
    }
  }
  output.push(prices[prices.length - 1]);
  return output;
};

console.log(finalPrices(prices));
console.log(finalPrices(prices2));
console.log(finalPrices(prices3));
