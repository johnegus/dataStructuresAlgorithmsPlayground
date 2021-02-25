const myArray = [1,2,2,2,2,3,4,5];
const mySet = new Set(myArray)

console.log(myArray)
console.log(mySet)  //removes duplicates
mySet.add(6);
mySet.delete(2)
// mySet.clear() //deletes all parameters
console.log(mySet.has(5))  //boolean to check inclusion
console.log(mySet.size)
console.log(mySet)


const uniqueArray = [...mySet];

console.log(uniqueArray)


//sets have no integer index


// key value pairs
const myMap = new Map([['name', 'John',], ['surname', 'Doe']]);

console.log(myMap);

const myOtherMap = new Map([[{}, 'a',], [{}, 'b']]);

myOtherMap.set('a', 2);
myOtherMap.delete('a')


console.log(myOtherMap);

