// 1716. Calculate Money in Leetcode Bank
// Easy

// Share
// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 

// Example 1:

let n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
// Example 2:

// Input: n = 10
// Output: 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
// Example 3:

// Input: n = 20
// Output: 96
// Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.


/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    let decrementer = n
    let counter = 1;
    let sum = 0
    
    while( decrementer > 0){
        for (let index = counter; index < 7+ counter; index++) {
            if ( decrementer > 0){
                console.log('index: ', index)
                console.log('D: ' + decrementer)

            sum += index
            decrementer--;
            }
            
        }
        counter++;
    }
    
    return sum
};


console.log(totalMoney(20))