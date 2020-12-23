// const test =(str) => {
//  return str

// }

// console.log(test("jump"))

// // Given array of zero & one.
// /*
//  role set --- Binary..  View.  
// 111 - 0
// 110 - 0
//  101 - 0
//  100 - 1
//  011 - 1
//  010-1 
// 001 - 1
// 000 - 0
 
//  */

//  // create function called next Generation 
//  // Take in array of [0,1,0,1,0,] and it return new array with the Role set apply 2 it. 
 
//  // role set. [0,1,0,0 1]
// //  1st and last element stay the same
// //            [0,,,, 1]
// //  Uses a binary computer set.  Moving window is always a 3. Aka . Always element in the window[0,1,0], 

// let givenArray = [

    
//    [ 111 - 0],
//     [110 - 0],
//      [101 - 0],
//      [100 - 1],
//      [011 - 1],
//     [ 010-1 ],
//    [ 001 - 1],
//    [ 000 - 0],

// ]

// const nextGeneration = (array) => {
 
//     let newArr = []
    
//    for(let i =0 ; i < array.length; i++){

//          if ((array[ i+1] && array [i] && array[i -1]) === 1 ){
//            newArr.push(0)  
//    } else{
   
//        newArr.push(array[i])
//    }
//  }
//  return newArr

// }
// console.log(nextGeneration([0,1,1,1,1]))
//  //> out should be 0,1,0,0,1

/*

Design and implement a hash table that uses arrays for collisions Required methods:
 get(key: String): 
 String insert(key: String, 
    value: String): 
    Unit delete(key: String):
     Unit
 You can assume that a function called “getHashCode(value: String): 
 
 Int” exists, 
 which accepts any string and returns a consistent, uniformly distributed integer.

 */


// const getHashCode = (key) =>{
//     // Code for Get, insert, delete.
     
//     get(key){
//         const hash = this.hash(key)
//     }


// }





//
