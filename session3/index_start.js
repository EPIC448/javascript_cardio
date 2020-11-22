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
// }   => 02,5,6,7



// ---------------------------------------------------
// CHALLENGE 2: SUM ALL PRIMES

// What is a PRIME NUMBER ==A prime number is a natural number greater than 1 that 
// is not a product of two smaller natural numbers. 

// Pass in a number to loop up to and add all of the prime numbers.
//A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
//prime number can only by mutiply 1 or itself

// add all Prime Num (10)= 17


 // Function  check Prime Numeber
 const checkPrime = (num) =>{
    let total  = 0;
    
    // Function Check for Prime(i)
    const checkPrime = (i) => {
        // NOte:  we want to check whether i is divisible by k = 2. If it is, it isn’t a prime number 
        //and we need to return the result a result of false.If the loop completes, the number must be a prime, 
    // and we can return a result of true.
    //2,3,4,5,6,7,8,9,10
      for(let k =2; k < i; k++){
        
        
      if(i % k === 0){
          return false;
        }
      }
        return true;
       
      }
    
    
    // Prime number most be greater than 2
    for ( let i =2; i <= num; i++ ){
       if (checkPrime(i)){ 
       total += i; 
       }
    }
    return total
  }
    
    console.log(checkPrime(10))

//--------------------------------------------------------------------
// CHALLENGE 3: SEEK & DESTROY
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

const seekAndDestroy = (arr, ...rest) => {
    // Filter only return want is "True" discard the rest
    // Note If i want it to include----  return arr.filter(val =>rest.includes(val))
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
