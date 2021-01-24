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