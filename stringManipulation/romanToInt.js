
//Given a roman numeral, convert it to an integer.


/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    const romanKey = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let stringLength = s.length;
    let result = 0;

    while (stringLength--) {
        const current = romanKey[s.charAt(stringLength)];
        const previous = romanKey[s.charAt(stringLength-1)];

        result += current
        if (previous < current){
            result -= previous;
            stringLength -= 1;
        }
    }
    return result;
};