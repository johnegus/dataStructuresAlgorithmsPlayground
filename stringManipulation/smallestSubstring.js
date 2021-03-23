//bloomberg interview question youtube video

let arr = ['x', 'y', 'z']
let str = 'xyyzyzyx'

// output = 'zyx'

let findSmallestSubstring = (arr, str) => {
    let answer = ''
    let object = {}
    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     object[element] = 0
        
    // }
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (typeof(object[letter]) === 'undefined'){
            object[letter] = letter;
            for (let j = i+1; j < str.length; j++) {
                const letter2 = str[j];
                if (typeof(object[letter2]) === 'undefined'){
                    object[letter2] = letter2;
                }
                if (typeof(object[letter2]) !== 'undefined'){
                    object = {};
                    break;
                }
                
                
            }
        }
        
        console.log(object)
        
    }
    return answer;
}

// let findSmallestSubstring = (arr, str) => {
//     for (let index = 2; index < str.length; index++) {
//         let arrayLetters = [str[index-2], str[index-1], str[index]]
//         console.log(arrayLetters)
//         if (arrayLetters.sort() === arr.sort()){

//             return arrayLetters.join('')
//         }
//     }
    
// }


// let findSmallestSubstring = (arr, str) => {
//     let countArray = []
    
//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i];

//         for (let j = 0; j < str.length; j++) {
//             const letter2 = str[j];
           
            
//             for (let index = 0; index < arr.length; index++) {
//                 const element = arr[index];
//                 if(letter === element){
//                     if (!countArray.includes(element)){
//                         countArray.push(element)
//                         console.log(countArray)
//                     }else {
//                         countArray = []
                        
//                     }   
//                 } 

//                 if(letter2 === element){
//                     if (!countArray.includes(element)){
//                         countArray.push(element)
//                         console.log(countArray)
//                     }else {
//                         countArray = []
                        
//                     }   
//                 }
//                 if (countArray.length === arr.length){
//                     return countArray.reverse().join('')
//                 }
//             }

//         }

        
        
//     }
    
// }


console.log(findSmallestSubstring(arr, str))