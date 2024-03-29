// 1342. Number of Steps to Reduce a Number to Zero


// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, 
// otherwise, you have to subtract 1 from it.


let num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.




/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let steps = 0;
    if (num ===0){
        return 0
    }
    let newNum = num
while(newNum){
    if (newNum % 2 === 0){
        newNum = newNum / 2
        steps ++;
    }

    if (newNum % 2 === 1){
        newNum = newNum - 1
        steps ++
    }

   
        if (newNum === 0){
            return steps;
        }
  
    }
    
};

console.log(numberOfSteps(num))