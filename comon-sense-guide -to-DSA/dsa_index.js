// Chapter 1. 

//printEvenNum(100)
const test = "Working test"
console.log( test)


//Leet code Search a 2D matrix.. Question 74

let  matrixTest = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
//Output: false


const searchMatrix = (matrix, target) => {
    let flatMatrix = matrix.flat()
    //.sort((a,b) => a-b)
      //let sortedFlatArray = flatMatrix.sort((a,b) => a-b)
      //console.log(flatMatrix) // [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 50]


    let left = 0, right = flatMatrix.length -1
  //console.log(flatMatrix)
    while(left <= right){
        let mid = Math.floor((right + left  )/2 );

        if(flatMatrix[mid] === target){ 
            return true
        }else if (flatMatrix[mid] <= target){
            right --
        
           
        } else
             left ++

        
    }
    return false

}

console.log(searchMatrix(matrixTest,13) )


//Leet Code ..(leetcode 345. Reverse Vowels of a String) ---- Working properly -----
var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    s = s.split("")
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (!vowels.includes(s[left])) {
            left++
        }
        if (!vowels.includes(s[right])) {
            right--
        }
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            let temp = s[left]
 // This is where the swipe occurs
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
    }
    s = s.join("")
    return s
};

let  Input = "leetcode" , Output = "leotcede"
//console.log(reverseVowels(Input))


// =====  Binary search working========
const binarySearch = (array, target) => {

 let sortedArray = array.sort()
 
  let left = 0, right = array.length -1 
   
  while( left <= right) {

    let midpoint = Math.floor((left + right / 2))
  
   
  if(sortedArray[midpoint] === target) return true

  if(target < sortedArray[midpoint]) {
      right = sortedArray[midpoint] -1
  }else
      left = sortedArray[midpoint] + 1
 }
  return false
}

//console.log(binarySearch([5,3,1,2,5,6,7], 3) )