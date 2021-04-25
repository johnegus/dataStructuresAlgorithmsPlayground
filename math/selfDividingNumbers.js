// 728. Self Dividing Numbers
// Easy

// Share
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
let left = 1,
  right = 22;
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:

// The boundaries of each input argument are 1 <= left <= right <= 10000.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let output = [];
  for (let index = left; index <= right; index++) {
    if (index < 10) {
      output.push(index);
    }
    if (index > 10) {
      let indexInteger = index;
      let numString = index.toString();
      let counter = 0;
      for (let j = 0; j < numString.length; j++) {
        const stringInteger = parseInt(numString[j]);
        console.log(
          "String Integer: " + stringInteger + "Index Integer: " + indexInteger
        );
        console.log(indexInteger % stringInteger);
        if (
          indexInteger % stringInteger !== 0 ||
          indexInteger % stringInteger === NaN
        ) {
          counter++;
        }
      }
      if (counter === 0) {
        output.push(indexInteger);
        counter = 0;
      }
      if (counter !== 0) {
        counter = 0;
      }
    }
  }
  return output;
};

console.log(selfDividingNumbers(left, right));
