var maximum69Number  = function(num) {
    let count = 0
    let newString = ''
    var n = num.toString();
    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        if (element === '6' && count === 0){
            newString = newString + '9'
            count ++;
        } else{
            newString = newString + element
        }
        
    }
    return parseInt(newString)
};

console.log(maximum69Number(9669))