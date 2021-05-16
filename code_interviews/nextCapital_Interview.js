// Code Challenge// index of the last space Character before the K element.=== WOrking

function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)

   // "Hello sWorld" , k =10. return only "HELLO" cropout space WORLD.  

      // If message.length < = K return message
      let result =""
     if (message.length <= K) return message

  for (const element of message){
    if(message.length > K){
     result = message.substring(0, K + 1)
     result =  result.split(" ")
      result = result.slice(0, -1).join(' ')
      // result = result.replace(',', '')
    }
  }
     return result
}

// let teststr = "Codility We test coders"
// let k =  14
// console.log(solution(teststr, k))

// ========== Next Problem======

//  Given an array 1s and 0s, find the longest sequence 
// of 1s and return  its starting INDEX
//   There could be muiltpy sequences of the same length

//   Return the starting points of the longest occurances(maximal)
//   ..BITS Means Nothing..
// If cant find the number return -1 

//   A[0] = 0
//   A[1] = 1
//   A[2] = 1
//   A[3] = 1
//   A[4] = 0
//   A[5] = 1
//   A[6] = 1
//   A[7] = 1
//   A[8] = 0
//   A[9] = 1

// [0,1,1,1,0,1,1,1,0,1] ==> 5

//Example 2
// Below should return negative -1
// A[0] = 0
// A[0] = 1

// [0,1]
   
// */


// Only allowed to change 2 lines.
function solution(A) {
    // A = array
    // n= array.length
    var n = A.length; // the array start from index 1,  instead of Zero
    var i = n - 1;
    var result = -1;
    //max = numberofoccurance, k= kount
    var maximal = 0, k = 0;
    while (i > 0) {
        if (A[i] == 1) {
            k = k + 1;
            if (k >= maximal) {
                maximal = k;
                result = i;
            }
        }
        else
            k = 0;
        i = i - 1; 
    }
    // if (A[i] == 1 && k + 1 > maximal)  // This Line is not usefull. changed line
        // result = 0;      // This Line is not usefull. changed line
        // result = -1; // The Change in the code.  change line
    
    return result; // Line from 66
}

let test1 =  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1] //=> 5

let test2 = [0,1]

let test3 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1]

let test4= [0,0] //>-1


console.log(solution(test4))
