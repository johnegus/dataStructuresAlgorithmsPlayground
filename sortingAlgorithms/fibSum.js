function fibSum(n){
    if (n === 1) return 1;
    if (n === 2) return 2;

    return (fibSum(n-1) + fibSum(n -2) + 1)
}
// console.log(fibSum(0)) 
console.log(fibSum(1)) 
console.log(fibSum(2)) 
console.log(fibSum(3)) 
console.log(fibSum(4)) 
console.log(fibSum(5)) // 1 2 3 4 5


function memoFibSum(n, memo={0:0, 1:1}){
    if (n in memo) return memo[n];
    memo[n] =memoFibSum(n-1, memo) + memoFibSum(n-2, memo) + 1;
    return memo[n];
}

console.log('memoized: ' + memoFibSum(45));
console.log('memoized: ' + memoFibSum(5));