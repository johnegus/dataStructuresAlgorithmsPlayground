let s = 'cdecd'
let startIndex = [0,0,0,0] 
let endIndex = [0,1,2,3]
let subs = [0,1,1,0]

// answer = '1110'
// https://github.com/samisherif95/HackerRankChallengeCodingProblems 

function palindromeChecker(string, startIndex, endIndex, subs) {
    let newstring = ''
    let intString = ''
    let falseCounter = 0
    for (let i = 0; i < startIndex.length; i++) {
        let slice = string.slice(startIndex[i], endIndex[i]+1)
        console.log(slice)
        let length = slice.length;
        if (length === 1){
            intString +='1'
        } else {
            for (let j = 0; j < length / 2; j++) {
                if (slice.charAt(j) !== slice.charAt(length -1 - j)){
                    if (subs[i] > 0){
                        break;
                    }
                    falseCounter++
                
            }
        }
        if (falseCounter > 0){
            intString+= '0'
            falseCounter = 0
        } else {
            intString+= '1'
        }
        }
        
        

        
    }
    return intString

}

console.log(palindromeChecker(s, startIndex, endIndex, subs));
