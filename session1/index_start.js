// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // Solution 1,
  // return str.split('').reverse().join()

 

  //--------------------- Another solution with ForLoop----------
  let revString = '';
  for (let char of str){
    revString = char+revString  
  }
  return revString;
}
const a = [1, 24, 5, 6]
  const b = ("hello")
  console.log(reverseString(b))
//------------------------------------------------

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

 //------Solution 1------------ working
// function isPalindrome(str) {
//    let reverseString = str.split('').reverse().join('') // You want it to return a String
//   console.log(reverseString)
     
//   if (reverseString === str) {
//      return true
//   } else 
//     return false
   
// }

// console.log(isPalindrome("racecarsd"))

//-----------solution 2------- Working
const isPalindrome=(str) => {
  //Create new varible &reverse the string..... split, reverse, join
  let reverseStr = str.split('').reverse().join('')
  // Compre reverese string to  orginal string . return true or false
  // Note: .join need to be invoked with ('')
  return (reverseStr  === str ?  true :  false)
 }

console.log(isPalindrome("bed")) // => true


// ----------------------------------
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

  let revInt = int.toString('').split('').reverse().join('');
// Becasue Int, Turn into a string, Then split
  return parseInt(revInt) * Math.sign(int)
  //return back to Interger/ and include the Sign 
}

//note:  Work most when the Number passed in is a string ("324")
let testInt = [-52156546]
console.log(reverseInt(testInt))


//---------------------------------------------------------------------------------------

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  
  return str.toLowerCase().split(' ').map(function (word) {
    return word[0].toUpperCase() + word.substring(1)  // using substring attache the remindr do the Word
  }).join(' ')
    
}

console.log(capitalizeLetters("i love Bodybuilding so much"))


//=============== CHALLENGE 5: MAX CHARACTER==================
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
   // make a charter map =>   f:1, u:1, n:2, y:1
  let emptyObj = {};
  for (const char of str) {
    // Note make sure to use "OF"...
    (!emptyObj[char]) ? emptyObj[char] = 1 : emptyObj[char]++
    // return emptyObj we had to Mute this SO to use in other varible 
    
    }
          // This is an objet now.

  let maxNum = 0;
  let maxChar = "";

  //  /iterate over the object
  for (let char in emptyObj) {
   
    // Create  Empty String and MaxNum =  0    
    if (emptyObj[char] > maxNum) {
      
      maxNum = emptyObj[char];
      maxChar = char;   
    }
  }
  return maxChar   //=> J
}

console.log(maxCharacter('javascrijpty'))
// ---------------------------------------------------------------------

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", 
// for multiples of 5 print "Buzz".For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(n) {

  if (n < 1) return 1

  for (let index = 1; index < n; index++) {
    if (index % 3 === 0) {
      console.log("Fizz")
    } else if (index % 5 === 0) {
      console.log("Buzz")
    } else if (index % 3 === 0 && index % 5 === 0) {
       // You can use 15 here aswell. 
      console.log("FizzBuzz")
    } else {
      console.log(index )
    }
  }
 
  
}
 


// Call Function
const output = fizzBuzz(100);

console.log(output);


