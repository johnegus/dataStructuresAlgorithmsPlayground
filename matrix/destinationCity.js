// 1436. Destination City
// Easy

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

let paths2 = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

let paths3 = [["A","Z"]]
// Output: "Z"
 

// Constraints:

// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.

/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    let object = {};

    for (let index = 0; index < paths.length; index++) {
        const element = paths[index];
        object[element[0]] = element[0]

        
    }

    for (let index = 0; index < paths.length; index++) {
        const element = paths[index];
        if (typeof(object[element[1]]) === 'undefined'){
            return element[1];
        }

        
    }


    return object;
};

console.log(destCity(paths))
console.log(destCity(paths2))
console.log(destCity(paths3))