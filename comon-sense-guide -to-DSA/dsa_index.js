// Chapter 1. 

//printEvenNum(100)
const test = "Working test"
console.log( test)


//Leet code Search a 2D matrix.. Question 74

let  matrixTest = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
//Output: false


const searchMatrix = (matrix, target) => {
    let flatMatrix = matrix.flat()
    let left = 0
    let right = flatMatrix.length -1
  //console.log(flatMatrix)
    while(left <= right){
        let mid =Math.floor((right + left)/2);

        if(flatMatrix[mid] === target) return true;

        if(flatMatrix[mid] <= target){
            left = flatMatrix[mid] +  1
        } else if(flatMatrix[mid] >= target){
            right = flatMatrix[mid] - 1

        }else{
            console.log("Cant find")
        }
        
    }
    return false

}

//console.log(searchMatrix(matrixTest,7) )


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
console.log(reverseVowels(Input))
