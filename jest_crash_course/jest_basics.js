const axios = require("axios");


const onlyEven = array => {
    // put your solution here
    let oddBucket = []
    let evenBucket = []
    
    array.forEach((num => (num % 2 === 0) ? (evenBucket.push(num)) : (oddBucket.push(num))))
    return evenBucket
};


const add = (num1, num2) => {
     return num1 + num2
 }

const isNull = () => null
 
const checkValue = () => false //0

const createUser = () => {
    const user = { firstName: "Brad" }
    user['lastName'] = "Traversy";
return user
}


const asynchronousRequest = () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.data)
    //.then(json => console.log(json))
    .catch(err => 'error')
       

    //Testing Algorithem Problems. 

const reverseString = (str) => {
    let revString = '';
  for (let char of str){
    revString = char+revString.toLowerCase()
  }
  return revString;
}  
  
const chunkArray = (arr, size) => {
   
        //   Create an empty array to hold the chunks called chunked_arr.
        // Declare a variable called index started at 0
         let chuncked_arr = [ ] ; let index = 0;
        
        // While index is less than length of the given array
          while(index < arr.length){
        //   Slice the array from index to size + index and push it into the chunked_arr
            chuncked_arr.push(arr.slice(index, size + index));
          // Increment the index with size
           index += size
          
          }
          return chuncked_arr
          
}

const isAnagram = (str1, str2) => {
    // ----- Solution 2 -----Working-
  return formateStr(str1) === formateStr(str2);
   

  //helper functions
  function formateStr(str) {
    //Take out punctutation using REGULAR Expression , 
    //Turn it all to lowercase 
    //split into Array, then Join it back .
    
    return str
      .replace(/[ˆ\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    
  }
  

}


// ------------ Testing Fibonacci--------

 
//  Using Recussion. 
//Numbers input:  1,2,3,4,5,6,7,8,9,10
//fib Number out: 0,1,1,2,3,5,8,13,21,34

// const fibNum = (n) => {
//   if(n <=2) return 1
   
//   // for(let i = 0; i < n; i++){
    
//   return fibNum(n -1) + fibNum(n - 2)
//     //
    // }
     
   
   
    const fibonacci =(n) => {
      let  arr = [0,1] // index
      for (let i = 2; i < n; i++){
        //n = 2,3,4,5
        console.log
        arr.push(arr[i - 1] + arr[i - 2])
        
        /* firsrt round 1     +  0 =1
          2nd         
        

        */
        }
        return arr[n - 1]
      }
    
    
    console.log(fibonacci(6))


//---------------End of testing Fibonacci---------

module.exports = {
 // names of the created functions here.
    onlyEven, add, isNull, checkValue, createUser, asynchronousRequest,
    reverseString,chunkArray, isAnagram,

}