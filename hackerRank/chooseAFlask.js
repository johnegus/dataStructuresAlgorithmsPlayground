let n = 4
let requirements = [4,6,6,7]
let flaskTypes = 3
let markings = [[0,3], [0,5], [0,7], [1,6], [1,8], [1,9], [2,3], [2,5], [2,6]]

// [flasknum, markings]

// first flask loss 3 units
// dencond 3 units
// third cannot be used it is too small
//answer is flask at index 0
// if the marking is less than requirement move to next one

//continue skips one iteration
function chooseFlask(requirements, flaskTypes, markings) {
    let flaskObject = {};
    for (let index = 0; index < markings.length; index++) {
        const flaskMark = markings[index];
        const flask = flaskMark[0]
        const mark = flaskMark[1]
        flaskObject[flask] = 0;
        console.log(flaskObject)
        for (let j = 0; j < requirements.length; j++) {
            const amount = requirements[j];

            
        }
        
    }

}

console.log(chooseFlask(requirements, flaskTypes, markings))