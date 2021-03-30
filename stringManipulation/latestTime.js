// 1736. Latest Time by Replacing Hidden Digits
// Easy

// Share
// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

// The valid times are those inclusively between 00:00 and 23:59.

// Return the latest valid time you can get from time by replacing the hidden digits.
// Example 1:

let time = "2?:?0"
// Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.
// Example 2:

let time2 = "0?:3?"
// Output: "09:39"
// Example 3:

let time3 = "1?:22"
// Output: "19:22"
let time4 = "?4:03"
let time5 = "??:3?"
/**
 * @param {string} time
 * @return {string}
 */
 var maximumTime = function(time) {
    time = time.split('')
        if (time[0] === '?' && time[1] === '?'){
            time[0] = '2'
            time[1] = '3'
        }
        if (time[0] === '?' && time[1] < 4){
            time[0] = '2'
        }
        if (time[0] === '?' && time[1] >= 4){
            time[0] = '1'
        }
        if (time[0] === '2' && time[1] === '?'){
            time[1] = '3'
        }
        if (time[0] !=='2' && time[1] === '?'){
            time[1] = '9'
        }
        if (time[3] === '?'){
            time[3] = '5'
        }
        if (time[4] === '?'){
            time[4] = '9'
        }
        
    
    return time.join('')
};

console.log(maximumTime(time))
console.log(maximumTime(time2))
console.log(maximumTime(time3))
console.log(maximumTime(time4))
console.log(maximumTime(time5))