arr1 = [123, 543];
arr2 = [321, 279];


// 16 total moves needed to match arr1 and arr2

// this is correct
function minimumMoves(arr1, arr2) {
    let diff = 0
    for (let i = 0; i < arr1.length; i++) {
        const num1 = arr1[i].toString();
        const num2 = arr2[i].toString();
      
        for (let j = 0; j < num1.length; j++) {
            const realNum1 = parseInt(num1[j])
            const realNum2 = parseInt(num2[j])
            console.log( 'diff: ' + realNum1 + realNum2)
            diff += Math.abs(realNum1 - realNum2)
            
        }
        
    }
    return diff;

}


console.log(minimumMoves(arr1, arr2))