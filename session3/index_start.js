// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll(...rest) {
//      //using rest oprator. 
//     let total = 0;
//     rest.forEach(num => {
//         total += num;
//     });
//     return total;
// }


// ---------------------------------------------------
// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. 
//A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
//prime number can only by mutiply 1 or itself

function sumAllPrimes(num) {

    let total = 0
    //Note: We Start from 2 because the num most be higher < 2
    // Step2
    const checkForPrime = (i) => {
        
        for (let j = 2; j < i; j++){
            if (i % j === 0) {
                return false
            }
        }
        return true
    }

    // step 1
    
    for (let index = 2; index <= num; index++) {
      
        if (checkForPrime(index)) {
            
           total += index
            
        }
    }
   return total
  }

//--------------------------------------------------------------------
// CHALLENGE 3: SEEK & DESTROY
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

//  learn how we use ...rest, filter and includes 
const seekAndDestroy = (arr, ...rest) => {
    // Filter only return want is "True" discard the rest
    // Note If i want it to inlude----  return arr.filter(val =>rest.includes(val))
    return arr.filter(val =>!rest.includes(val))
     
 }
//console.log(seekAndDestroy([2,5,3,1,34, 'hello'], 2,5))


//---------------------------------------------------------------------

function sortByHeight() {
    // Some people are standing in a row in a park. 
    //There are trees between them which cannot be moved.
    //Your task is to rearrange the people by their heights in a non - descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
    
    // Create 2 empty Array to seperate  the negative -1 and just numbers. 
    const arr1 = [];
    const arr2 = [];  
    a.forEach(function (val, i ) {
        ( val === -1? arr1.push(i) : arr2.push(val))
    })
    // we sort the arr 2 from smallest to largest. 
    // sorting from smallest to largest
    const sortArr = arr2.sort((a, b) => a - b) 
    
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
    return sortArr;
}

let a = [-1, 150, 190, 170, -1, -1, 160, 180]
 //console.log(sortByHeight(a))

 //------------------------------- //Needing to study this.-------
// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str) {
//     let compare = str.charCodeAt(0) // start at the first charater code of the string. 
//     let missing;

//     str.split('').map(function (char, i) {
//         // if the charcter at that code is missing, it move to the next chartercter code. 
//         if (str.charCodeAt(i) == compare) {
//             ++compare;
//         } else {
//             missing = String.fromCharCode(compare)
//         }
//     })
//     return missing
// }

//console.log(missingLetters("abd"))//  => c

//----------------
// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0
    let oddSum = 0
    //iteration using forEach
    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))
        return [evenSum, oddSum]
    }
    // if()
    
 

console.log(evenOddSums([50, 60, 60, 45, 71]))
