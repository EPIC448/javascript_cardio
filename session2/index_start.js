// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
      //Remove punctuation.match 
  var senSplit = sen.split(' ')
  
      // Sort the element in Array.
  var getLongestWord = senSplit.sort(function (a, b) {
      return b.length - a.length 
  })
  
       //Say 2 or more words are longer at the same. .
  // const longwordArray = getLongestWord.filter(function (word) {
  //   console.log(getLongestWord)
  //   if (getLongestWord[0].length === word.length) {
  //         return getLongestWord
  //   } else
  //     return   getLongestWord[0]

  // })
  return getLongestWord[0]
  
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

    //  create a empty arr
    let emptyChunckedArr = []
     let  i = 0
  
  // loop when index < arr.length
  while (i < arr.length) {
    // emptyArr.push(arr.slice(i, i+len))
    
     //Slice out from index to the Index + the Chunk len & push on the  emptyChunckedArr
    emptyChunckedArr.push(arr.slice(i, i + len))  
      
    //increment by chunk lenght
    i += len;
    
   }
  
  return emptyChunckedArr
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 5);

console.log(output);
