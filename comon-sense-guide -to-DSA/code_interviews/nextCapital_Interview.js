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



//  Given an array 1s and 0s, find the longest sequence 
// of 1s and return return its starting INDEX
//   There could be muiltpy sequences of the same length

//   Return the starting points of the longest occurances(maximal)
//   ..BITS Means Nothing.. 

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

// Below should return negative -1
// A[0] = 0
//   A[0] = 1
   
// */



// function solution(A) {
//     // A = array
//     // n= array.length
//     var n = A.length;
//     //index => A[9] = 1
//     var i = n - 1;
//     var result = -1;
//     //max = numberofoccurance, k= kount
//     var maximal = 0, k = 0;
//     while (i > 0) {
//         if (A[i] == 1) {
//             k = k + 1;
//             if (k >= maximal) {
//                 maximal = k;
//                 result = i;
//             }
//         }
//         else
//             k = 0;
//         i = i - 1; 
//     }
//     if (A[i] == 1 && k + 1 > maximal)
//         result = 0;
//     return result;
// }

// let test1 =  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1]

// let test2 = [0,0]

// let test3 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1]


// console.log(solution(test3))
