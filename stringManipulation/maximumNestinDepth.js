// 1614. Maximum Nesting Depth of the Parentheses
// Easy

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

let s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

/**
 * @param {string} s
 * @return {number}
 */
let maxDepth = function(string) {
    let output = 0; 
    let largest = 0
    let max = 0; 
    let counter = 0
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (element === '(' && counter === 0){
            counter++;
            max++;
            for (let j = index + 1; j < string.length; j++) {
                const element = string[j];
                if (element === '('){
                    max++;
                   
                }
                if (element === ')'){
                    output = max;
                    if (output > largest){
                        largest = output
                    }
                    max--;

                    
                }
                
            }
            
        }
        
    }
    return largest;
};

console.log(maxDepth(s))

console.log(maxDepth("1+(2*3)/(2-1)"))  //1