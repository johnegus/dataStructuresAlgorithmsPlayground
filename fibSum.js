function fibSum(n){
    if (n === 1) return 1;
    if (n === 2) return 2;

    return (fibSum(n-1) + fibSum(n -2) + 1)
}


console.log(fibSum(5))
console.log(fibSum(45))