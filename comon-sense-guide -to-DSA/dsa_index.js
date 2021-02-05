// Chapter 1. 

//printEvenNum(100)




//==================================================================================================================
// Chp8. HashTable...... DSA Code Preparation.s 

/*

  write function return intersection of 2 array. [i.e  [1,2,3,4,5], [0,2,4,6,8]] => [2,4]
  should be in O[N]

*/
 const arrInsterSecton = (arr1, arr2) => {
  let intersection = []
  let hashTable = {}
  
  for (let i = 0; i < arr1.length; i++) {
            
        hashTable[arr1[i]] = true
      
  }
    for(let j = 0; j < arr2.length; j++){
        if(hashTable[arr2[j]]) intersection.push(arr2[j])
    }
// console.log(hashTable)
   return intersection

 }
  // console.log(arrInsterSecton([1,2,3,4,5], [0,2,4,6,8]) )  // =>[2,4]  it working


// ================ Problem 2 [accept array of strings and return the first duplicate it finds. ]  ["a", "b", "c", "d", "c", "e"]
const duplicateValue = str => {
   let hashMap = {}

   for(let i = 0; i < str.length; i++) {
       //console.log(str[i])
       if(!hashMap[str[i]]){
           // becasue we checking if it is present. I didnt need to use a .include here.  
        hashMap[str[i]] = true
       }else{
           
        return str[i]
       }
   }
   
  }
console.log(duplicateValue(["a", "b", "c", "d", "c", "e"]) )  //=> "c"    Working


//=---------------- Solution 4. ---------------
/*

 return the first non-duplicate character in a string of "minimum"
*/
const  returnFirstDuplicate = str =>{
let hash = []
  for (let i = 0; i < str.length; i++) {
      //console.log(val)
      if(!hash[str[i]]){
        hash[str[i]] = 1
       } else{
        hash[str[i]]++
       }
       
       for(let j = 0; j < str.length; j++){
       if(hash[str[j]] == 1) return str[j]
   }

  }
   
}
console.log(returnFirstDuplicate("minimum") ) // => m

// Come back and resolve
// function that accept all letter of alphbets, execpt 1, return the missing letter. 

const missingLetter = (str) => {

  let alphbets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]//a-z

  let hashMap = {}
  //put the str in an hash
   for (const iterator of str) {
      if(!hashMap[iterator]){
        hashMap[iterator] = "true"
      }
      console.log(hashMap)
      // we iterate over the alphbet value with a loop and see if it is true in in hashmap with strings stored.
      for(let i = 0; i < alphbets.length; i++){
                console.log(str)

        if(!hashMap[alphbets[i]]){
          return alphbets[i]
        }
      }

   }
  
}
console.log(missingLetter("a","b","c","d","e","g","h") )

const test = ("Working test") 
console.log( test)
