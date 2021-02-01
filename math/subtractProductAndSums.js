// 1281. Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15


/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(number) {
    let array = number.toString().split("");//stringify the number, then make each digit an item in an array
      let numArray = array.map(x => parseInt(x));//convert all the items back into numbers
      let product = 1;
      let sum = 0
      
      for (let index = 0; index < numArray.length; index++) {
          const integer = numArray[index];
            product *= integer;
            sum += integer;
          
      }
      return product - sum;
};