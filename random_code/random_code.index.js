
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



 //console.log (threeSum2([ 7, 11,1,1, 15], 10 ))






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

const removePalindromeSub = s => {
    if (s.length === 0) return 0;
    /// Using the two pointer method
    for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
      if (s[left] !== s[right]) return 2;
    }
    return 1;
  };
  
  //console.log(removePalindromeSub("baabb"))




  ///

  /** LeetCode.  1418.......... Display Table of Food Orders in a Restaurant. Using HashTable. 
 // Need to Work on and Review it. 
 

 */
  let orders = [
      ["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],
  ["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]
  ]

  //expected Output


  /*
  Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],
            ["3",   "0",  "2",      "1",                        "0"],
            ["5",   "0",  "1",      "0",                         "1"],
            ["10",  "1",  "0",     "0",                          "0"]
] 
  
  */

var displayTable = function(orders) {
    
    
    let tables = {} // hash
     let foodArray = []
    // let emptyArray = []
     let answer = []
      
     for(let i = 0; i < orders.length; i++){
            
         // array of food. 
         if(!foodArray.includes(orders[i][2])) {
             foodArray.push(orders[i][2])
         } 
            
         let tableNum = orders[i][1] // which are the Table numbers
          
    // Tables Numbers as keys... Nesting an Hash within the First Hash. 
        if(!tables[tableNum]){
               tables[tableNum] = {}
        }
               // if  (order[i][2]) --- This is your Food.
         let foodOrdered = orders[i][2] 
         
         
           if(!tables[tableNum][foodOrdered ]){
                    tables[tableNum][foodOrdered ] = 1
                }else{
                    tables[tableNum][foodOrdered] ++
                }
     }
     
    foodArray.sort()
    foodArray.unshift("Table")
    answer.push(foodArray)  // first Array in  our answer
    
    // Itreate over keys of nasted Hash tables.
    // We need to work on this parts.  

   Object.keys(tables).forEach(table =>{
            

     let newTable = []
        newTable.push(table)
       
       //check each time in food is in our table using the key. 

 
       
        for(let i = 1; i < foodArray.length; i++){
                    

            if (tables[table][foodArray[i]]) {
             newTable.push(String(tables[table][foodArray[i]])) 

            } else{
            
             newTable.push('0') 
         }
        }
       
       
       answer.push(newTable)
       
     } )
       
  
     
    return answer
   
};
displayTable(orders)

// -------------------Implementing a Hash Table from Scratch . -------------------

 const hashStringToInt = (str, tableSize) => {
     
    // for each key, we want it to use the character-code using it representation.
    let hash = 17
    // iterate over the incomeing string and use the character code. 
     for (let i = 0; i < str.length; i++) {
          //we  divide by table size so that Table does not get to gib
         hash = (hash * str.charCodeAt(i) )% tableSize
     }  
     
     return hash;
 }

// Create a HashTable Class 
 
 class HashTable {
   
     // It will Store stuff in Array.
     table = new Array(4)  // we set a new Array so that we can set up the size of the array, 

      //number of items in our elements. 
     numItems = 0
 // Sometimes when the Table gets too big. You may need to resize.. 
    resize = () =>{
       const newTable = new Array(this.table.length * 2);

       this.table.forEach(item => {
            if(item){
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    
                    if(newTable[idx]) {
                        newTable[idx].push([key, value]);
                    }else {
                                            newTable[idx] = [[key,value]]

                    }

                })
            }
       })
       this.table = newTable
    }
   
       
    // lay out the structure for setItem and getItem. 
   setItem = (key,value) => {
       this.numItems++ 
      // Creating a resize here. When we hit capcity of 80% resize
      const loadFactor = this.numItems / this.table.length
      
      if(loadFactor > .8){
          //resize
          this.resize
      }
    // we turn the hash that is a string into int using a helper function.
    const idx = hashStringToInt(key, this.table.length)
    // we set it like this ti aviod collission 
    if(this.table[idx]){
        this.table[idx].push([key, value])

    }else{
        
    this.table[idx] = [[key, value]] 
    }
   };
      // lay out the structure for setItem and getItem. 

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)

        if(!this.table[idx]){
            return null
        }
        return this.table[idx].find(x => x[0] === key)[1]
    };
 }

  const myTable = new HashTable
  myTable.setItem('firstName', 'bob'); 
  myTable.setItem('lastName', 'tim'); 
  myTable.setItem('age', 5); 
  myTable.setItem('dob', "12"); 
  myTable.setItem('location', "NY"); 
 
//   console.log(myTable.table.length)

  console.log(myTable.getItem('firstName'))
  console.log(myTable.getItem('lastName'))
//   console.log(myTable.getItem('age'))

//   console.log(myTable.table.length)

   console.log(myTable.getItem('location'))


 /*
  NOTE:  5 % 2 = Return the reminder .. 2
   Solve leet code. 215
   https://dev.to/foqc/the-water-jug-riddle-in-js-em1

   */