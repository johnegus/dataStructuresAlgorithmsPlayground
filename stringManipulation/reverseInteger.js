// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// turn integer to string
//reverse the strine, c
//convert back to integer
let reverse = function(integer) {
    const limit = 2147483648;
    const sign = integer < 0 ? -1 : 1;
    const newInteger = Number(String(Math.abs(integer)).split('').reverse().join(''));
    return newInteger > limit ? 0 : newInteger * sign;
};



function howMany(sentence) {
    let newArray = [];
    
    sentence.split(' ');
    for (let i = 0; i < sentence.length; i++ )
    
    return sentence.length;

}


let newArray = sentence.trim().split(/\s+[^0-9]/);

/*
 * Complete the 'howMany' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING sentence as parameter.
 */

function howMany(sentence) {
  
    
    let answerArray = []
    let newArray = sentence.split(' ');
    for (let i = 0; i < newArray.length; i++ ){
        let word = newArray[i]
        if (!word.match(/[^\p{L}\d\s@#]/u)){
            answerArray.push(word)
        }
        }
        return answerArray.length
    }



/*
 * Complete the 'slowestKey' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
 */

function slowestKey(keyTimes) {
    let slowest = 0;
    let abc = 'abcdefghijklmnopqrstuvwxyz'
     for (let i = 0; i < keyTimes.length; i++){
         let pair = keyTimes[i]
         for (let j = 0; j < pair.length; j++){
             slowest = pair;
             if (pair[1] > slowest[1]){
                 slowest = pair
             }
             
         }
         
         
     }
 return abc[slowest[0]]
 }