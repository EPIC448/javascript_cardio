
//Solving two or three Problem. 
// Problem Statement — Given an array of integers, return indices of the two numbers
//  such that they add up to a specific target.

//Given nums = [2, 7, 11, 15], target = 9,// Start with 2. 
// What 2 num in the array add up to Target = 9



function addSumTwo(array, target) {

    let result = []

    //iteration
     for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           
         if(array[i] + array[j] === target){
            result.push(i)
            result.push(j)

         }   
        }
     }
  return result
 }


//console.log(addSumTwo([2, 7, 11, 15], 9) )

// Solve 3sum of problems. using a Loop and 2 pointer method.
const threeSum = (arr,Target) => {
 arr.sort((a,b) => a - b )

 let result = []
 
 for(let indexA = 0; indexA < arr.length; indexA++){
   
   let indexB = indexA + 1, indexC = arr.length - 1

   if (indexA > 0 && arr[indexA] === arr[indexA -1]){

      let sum = arr[indexA] + arr[indexB] + arr[indexC]

      if(sum < 0){
         indexB ++
      }else if(sum > 0){
         indexC--
      }else{
         result.push([arr[indexA], arr[indexB], arr[indexC]]);

         while (arr[indexB] === arr[indexB] == arr[indexB + 1]) indexB ++
         while (arr[indexC] === arr[index - 1]) indexC --
         indexB++
         indexC --

            
         
      
      }
   }
   return result

 }

}
//console.log(threeSum([2, 7, 11, 15]), 9 )

  //Extra Problems. 

  function threeSum2(arr, target) {

    arr.sort((a, b) => a - b)

    let emptyBucket = []
    // Then we are going to find our current sum which is the sum of our current number, a left number, and a right number.
    //First loop
    for (let i = 0; i < arr.length - 2; i++) {
        // Make sure out Array is no duplicates.
        if (arr[i] != arr[i - 1]) {
            // arr[i-1] number behind out current Values where we stand
            let left = i + 1
            let right = arr.length -1

            while (left < right) {
                let currentSum = arr[i] + arr[left] + arr[right]
                if (currentSum === target) {
                    emptyBucket.push(arr[i] + arr[left] + arr[right])
                    while (arr[left] == arr[right + 1])
                        left++
                    while (arr[right] == arr[right - 1])
                        right--
                    left++
                    right++
                } else if (currentSum < target) {
                    left++
                } else if (currentSum > target) {
                    right--
                }
            }
        }
    }
    return emptyBucket
}



 console.log (threeSum2([ 7, 11,1,1, 15], 10 ))






//------- Code is Working---- but need Better understanding ---
/// From code meet ups.. The code follow a sequence of 1,0,1,0
// return numbers of time a certain element changes in the code. 

function solution(A) {
     // edge cases
   if(A.length === 1 ) {
       return 0
   }
   if (A.length === 2) {
       if(A[0] !== S[1]) {
           return 0
       } else {
           return 1
       }
   }
    //solutions
   let count1 = 0
   let count0 = 0
       for(let i = 0; i < A.length; i++) {
            if(i % 2 === 0){
                //if we start at 0
                if(A[i] === 1){
                    count0++
                }
                //if we start at 1
                else {
                    count1++
                }
            } 
            if(i % 2 !== 0) {
                //if we start at 0
                if(A[i] === 0) {
                    count0++
                }
                // if we start at 1 
                else {
                    count1++
                }
            }
       }
    //console.log(Math.min(count1, count0))
}
let A = [1,1,1,1,0,0]
  // >  [1,0,1,0,1,0]
solution(A)

//------- Code is Working---- but need Better understanding ---
