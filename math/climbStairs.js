// 70. Climbing Stairs
// Easy


// Share
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 5
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step 1
// 2. 1 step + 2 steps 1
// 3. 2 steps + 1 step 1
// 1 1 2
// 2 2


/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
};


function fibMemo(n, memo = {0:0, 1:1, 2:2}){
    if (n in memo) return memo[n];
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];

}

console.log(fibMemo(4))