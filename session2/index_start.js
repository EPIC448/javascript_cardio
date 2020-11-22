// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
//   // SOLUTION 1 - Return a single longest word
//       //Remove punctuation.match 
//   var senSplit = sen.split(' ')
  
//       // Sort the element in Array.
//   var getLongestWord = senSplit.sort(function (a, b) {
//       return b.length - a.length 
//   })      
  
//        //Say 2 or more words are longer at the same. .
//   // const longwordArray = getLongestWord.filter(function (word) {
//   //   console.log(getLongestWord)
//   //   if (getLongestWord[0].length === word.length) {
//   //         return getLongestWord
//   //   } else
//   //     return   getLongestWord[0]

//   // })
//   return getLongestWord[0]
  
// }

//---------------------------------------------------------

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {

//     //  create a empty arr
//     let emptyChunckedArr = []
//      let  i = 0
  
//   // loop when index < arr.length
//   while (i < arr.length) {
//     // emptyArr.push(arr.slice(i, i+len))
    
//      //Slice out from index to the Index + the Chunk len & push on the  emptyChunckedArr
//     emptyChunckedArr.push(arr.slice(i, i + len))  
      
//     //increment by chunk lenght
//     i += len;
    
//    }
  
//   return emptyChunckedArr
// }
// -------------------------------------------------------------
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

  // Solution 1
    /// all on Single line....  console.log(arrays.reduce((a,b) => a.concat(b)))
  
  // return arrays.reduce(function (a, b) {
  //   return a.concat(b)
  // })

  //  --Solution 2
   return [].concat(...arrays)
}

//------------------------  NOt workin yet-----------------------------------------
// CHALLENGE 4: ANAGRAM-
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
//       

function isAnagram(str1, str2) {
                    
  // ----- solution 1-----------------

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
  
  // use th Helper method
  

//}
//  -------------------------------------------------
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'


function letterChanges(str) {

  // create new String with regular expression to ..  [gi] means Global case insensitve 
  let newStr = str.replace(/[a-z]/gi, function (char) {
    // If the Charter is at Z, we need a way for it ti loop around 
    if (char === 'z' || char === 'Z') {
      return 'a'
    } else {
      // move the Charter over 1... so  "h"  --- "i"
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  });

  // capitizle the volwes. 
  newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
    return vowel.toUpperCase();
  });
   return newStr
}




//----------------------------------------------------------------------
// Call Function
const output = letterChanges("Hello There")


console.log(output);
