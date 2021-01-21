function myMap(array){
    let final = []
    array.forEach(element => {
        final.push(element + 1)
    });
    return final
}

console.log(myMap([1,2,3,4]))