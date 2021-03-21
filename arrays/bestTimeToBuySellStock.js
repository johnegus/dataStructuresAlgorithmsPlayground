// 121. Best Time to Buy and Sell Stock
// Easy


// Share
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [7,6,4,3,1]
// Output: 5

/**
 * @param {number[]} prices
 * @return {number}
 */

//naive On^2
//  var maxProfit = function(prices) {
//     let max = 0

//     for (let i = 0; i < prices.length; i++) {
//         const buyPrice = prices[i];
//         for (let j = i+1; j < prices.length; j++) {
//             const sellPrice = prices[j];
//             let profit = sellPrice - buyPrice
//             if (profit > max){
//                 max = profit
//             }
            
//         }
        
//     }
//     return max
// };


// faster On
var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        const sellPrice = prices[i];
        if (min > sellPrice) {
            min = sellPrice
        } else if(sellPrice - min > profit) {
            profit = sellPrice - min
        }
        
    }
    return profit
};

console.log(maxProfit(prices))