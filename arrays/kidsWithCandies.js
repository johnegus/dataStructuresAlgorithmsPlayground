// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 //
var kidsWithCandies2 = function(candies, extraCandies) {
    let addedCandies = []
    let trueFalse = []
    for (let i = 0; i < candies.length-1; i++){
        addedCandies.push(candies[i] + extraCandies)
        for (let j = i +1; j < candies.length -1; j++){
            if (addedCandies[i] > candies[j] + extraCandies){
                trueFalse.push(true)
            } else {
                trueFalse.push(false)
            }
        }
    }
    return trueFalse
  
};




const kidsWithCandies = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);
console.log(kidsWithCandies([1,2,3,4,5], 3))