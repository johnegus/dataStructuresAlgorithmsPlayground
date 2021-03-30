// 322. Coin Change
// Medium
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

let coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

let coins2 = [2], amount2 = 3
// Output: -1
// Example 3:

let coins3 = [1], amount3 = 0
// Output: 0
// Example 4:

let coins4 = [1], amount4 = 1
// Output: 1
// Example 5:

let coins5 = [1], amount5 = 2
// Output: 2

let coins6 = [186,419,83,408], amount6 = 6249
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// greedy is not always optimal
var coinChange = function(coins, amount) {
    coins = coins.sort((a,b) => b - a)
    let count = 0
    let iterator = 0
    console.log(coins)
    while (amount > 0){
        console.log(amount)
        if (amount < coins[coins.length-1]) return -1
        if (amount >= coins[iterator]){
            amount -= coins[iterator]
            count++
        } else {
            iterator++
        }
    }
    return count
};

// console.log(coinChange(coins, amount))
// console.log(coinChange(coins2, amount2))
// console.log(coinChange(coins3, amount3))
// console.log(coinChange(coins4, amount4))
// console.log(coinChange(coins5, amount5))
console.log(coinChange(coins6, amount6))