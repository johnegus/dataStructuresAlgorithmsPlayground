// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.


//I/O: accounts = [[1,2,3], [3,2,1]] => 6

//loop through each account
//instanciate max and change when >
// O(n^2)

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    let accountBalance = 0;
    for (let i = 0; i < accounts.length; i++){
        let account = accounts[i];
        accountBalance = account.reduce((a, b) => a + b, 0)
        if (accountBalance > max){
            max = accountBalance
        }
        
    }
    return max;
};