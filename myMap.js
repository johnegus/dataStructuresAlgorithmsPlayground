function myMap(array){
    let final = []
    array.forEach(element => {
        final.push(element + 1)
    });
    return final
}

console.log(myMap([1,2,3,4]))




function productArray(nums){
    let prods = []
    let prods2 = []
    for (let i = 0; i <nums.length-1; i++){
        if (!Number.isInteger(nums[i]) || nums.length <= 1){
            return 'dancingbanana.gif'
        }
        prods.push(nums[i]*nums[i+1])
        prods.forEach(element => {
            prods2.push(element)
        })
    }
    return prods2
}

console.log(myMap([1,2,3,4]))

console.log(productArray2([1,2,3])) // [6, 3, 2]
// [2, 6, NaN]

console.log(productArray([1,2,'sassy']))
console.log(productArray([0,0, 3]))
console.log(productArray([3]))



function productArray2(nums){
    let prods = []
    let p = 1
    n = nums.length
    for (let i = 0; i <n; i++){
        prods.push(p)
        p = p * nums[i]
    }
    for (let i = 0; i < n - 1; i--){
        prods[i] = prods[i] * p
        p = p * nums[i]
    }
    return prods
}