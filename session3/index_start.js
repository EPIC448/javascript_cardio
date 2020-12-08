// -----CHALLENGE 1: ADD ALL NUMBERS----- working
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//solution 1
let addNum = (num) => {
   return num.reduce((acc, value) => acc + value)  

}
  
console.log(addNum([2,5,6,7])) //> 20

 // solution  2
// function addAll(...rest) {
//      //using rest oprator. 
//     let total = 0;
//     rest.forEach(num => {
//         total += num;
//     });
//     return total;
// }   => 02,5,6,7



// ---------------------------------------------------
// --------CHALLENGE 2: SUM ALL PRIMES----------working------

// What is a PRIME NUMBER = A prime number is defined as a number greater than one and having only two 
// divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// Pass in a number to loop up to and add all of the prime numbers.
//A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
//prime number can only by mutiply 1 or itself

// add all Prime Num (10)= 17

   let sumOfPrimeNum = (num) => {
     
    // step1 , empty total accumulator = o
      let total = 0
      let allPrimeNum = []
      
      //step2 = function that check primeNum, and return boolean if 
      //diversable by 2
        // Use a for loop that start from 2
        let checkPrimeNum = (i) => {
          // NOte:  we want to check whether i is divisible by k = 2. If it is, it isn’t a prime number 
    //and we need to return the result a result of false.If the loop completes, the number must be a prime, 
    // and we can return a result of true.
    //2,3,4,5,6,7,8,9,10
          
            for(let k = 2; k < i; k++){
               
               
                if (i % k === 0){
                  return false
                  } 
              }
              return true
          }
          
       // step3: loop over the give num and check each values with checkPrimeNum function
       for(let i = 2; i <= num; i++){
          if(checkPrimeNum(i)){
            total += i;
            allPrimeNum.push(i)
            }
         }
       return [total,allPrimeNum]
    
    }
    
    console.log(sumOfPrimeNum(10))
  
//--------------------------------------------------------------------
// CHALLENGE 3: SEEK & DESTROY


const seekAndDestroy = (arr, ...rest) => {
    // Filter only return want is "True" discard the rest
    // Note If i want it to include----  return arr.filter(val =>rest.includes(val))
    return arr.filter(val =>!rest.includes(val))
     
 }
//console.log(seekAndDestroy([2,5,3,1,34, 'hello'], 2,5))


//---------------------------------------------------------------------

//Sort By Height. 
// Some people are standing in a row in a park. 
    //There are trees between them which cannot be moved.
    //Your task is to rearrange the people by their heights in a non-descending(smallest- larget) 
    // order without moving the trees.
    
    let peopleAndTrees = [-1, 150, 190, 170, -1, -1, 160, 180]
 
    let peopleArr = [], treeArr = [], make = [3,2,4]
    
    function sortByHeight(arr){
      
      
    // Iterate Arr
   //
   // }
   
    // Note: We need to collect it index for the Trees, so we can use later....
    arr.forEach(function(val, index) {
      val === -1 ? treeArr.push(index) : peopleArr.push(val)
    })
     console.log(peopleArr)
      // Sort the people from Smallest to Largets.
         let sortedPeople = peopleArr.sort((a,b) => a -b)
      
      // Concatenat them where Tree stay where it is, And the new 
      //Sorted Height People... Stand in the Gap. USe ForEach
      
      treeArr.forEach(function(element,index){
        
        
           sortedPeople.splice(treeArr[index], 0, -1)
         
         
        })
        return sortedPeople
      }
      
console.log(sortByHeight(peopleAndTrees))
      // => [ -1, 150, 160, 170, -1, -1, 180, 190 ]

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
    
 

console.log(evenOddSums([50, 60, 60, 45, 71]) )
