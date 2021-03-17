//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


let s = "()"
Output: true
//loop through the string
// if ( or [ or {

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    let map = {
        ')': '(',
        '}' : '{',
        ']' : '['
};

let charStack = [];

if (string === null || string === undefined){
    return false
}

for (let i = 0; i < string.length; i++) {
    let current = string.charAt(i);
    let topElement;
    console.log(map[current])
    if (map[current] !== undefined){
        topElement = (charStack.length === 0) ? '#' : charStack.pop();
        if(topElement !== map[current])
            {return false}
    }else {
            charStack.push(current);
        }  
    }
return charStack.length === 0;  
};


// var isValid = function(s) {
    
//     let closeMap = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '['
//     };
//     let charStack = [];
    
//     // validate input
//     if(s===null || s===undefined)
//         return false;
    
//     for(var i = 0; i<s.length; i++){
//         let curChar = s.charAt(i);
//         let topElement;
//         console.log(closeMap[curChar])
//         if(closeMap[curChar] !== undefined){
//             topElement = (charStack.length===0) ? '#' : charStack.pop();
//             if(topElement !== closeMap[curChar])
//                 return false;
//         }else{
//             charStack.push(curChar);
//         }
//     }
//     return charStack.length === 0;
// };

console.log(isValid(s))