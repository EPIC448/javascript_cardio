Array of Positive numbers 
In Order, Small to Big.. can use a binary search here. 
Find ALL SUBSEQUENCES (find all the possible combination)  OF THE ARRAY that has M element. 
 M is length.. 
 Example  a = [2,3,5,9]
  length M = 3 .
  Find all SUBSEQUENCE or combination that fit in the length of M
  [2,3,5]
  [2,3,9]
  [2,5,9]
  [3,5,9]


   Subsquance array  = [1,2,3,4] consitiong of M = 3
   elements are {1,2,3}, { 1,2,4},{ 1,3,4} and { 2,3,4}

   iteration 1
   Subsquance { 1,2,3}, minimum difference between adjacent elelmtns is 1,
   value of Global maxium is 1

   iteration 2
   Subsquance { 1,2,4}, minimum difference between adjacent elelmtns is 1,
   value of Global maxium is 1
   iteration 3
   Subsquance { 1,3,34, minimum difference between adjacent elelmtns is 1,
   value of Global maxium is 1
   iteration 4
   Subsquance { 2,3,4}, minimum difference between adjacent elelmtns is 1,
   value of Global maxium is 1
   function return 1 as the answer
----------------------------------------------------
   function perm(xs, m) {
    let ret = [],
   index = 0
   
    for (let i = 0; i < xs.length; i++) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push(xs.slice(  [xs[i]], m + index   ))
        
      } else {
        for(let j = 0; j < rest.length; j++) {
          console.log(ret.push(xs.slice(xs[i].concat(rest[j]),  m))  )
          
          // ret.push(xs.slice([xs[i]].concat(rest[j]), m + index))
        }
      }
    }
    return ret;
  }
  // hile(index < xs.length){
  //   //iterate over it the First time
  //   for (let i = 0; i < xs.length; i++) {
  //   let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
  //  //where ewe slice -- ret.push(xs.slice(index, m + index));
  
        
  //   }
  //   index += m
     
  //   }
  console.log(perm([1,2,3,4], 3));\\


  -------------------------------------------


   And sample.. it is permutationt

   const getCombos = (arr, len) => {
    const base = arr.length
    const counter = Array(len).fill(base === 1 ? arr[0] : 0)
    if (base === 1) return [counter]
    const combos = []
    const increment = i => {
      if (counter[i] === base - 1) {
        counter[i] = 0
        increment(i - 1)
      } else {
        counter[i]++
      }
    }
  
    for (let i = base ** len; i--;) {
      const combo = []
      for (let j = 0; j < counter.length; j++) {
        combo.push(arr[counter[j]])
      }
      combos.push(combo)
      increment(counter.length - 1)
    }
  
    return combos
  }
  
  const combos = getCombos([1, 2, 3], 3)
  console.log(combos)

//    =====================



   // REductor Array question 
   Explanation 
   array a = [3,1,5], 
   array b = [5,6,7] and
   d = 2
   find difference absolute difference  of each element in array "a" with the element of array "b"

for   a[0] = 3, b[0] = 
  3-5 = -2
for   a[0] = 3, b[1] = 
  3-6 = -3
for   a[0] = 3, b[2] = 
  3-5 = -4
  Difference are [2,,3,4]
  fora[0] =3, there exists at least one integer in the second array with absolute difference less than or equal to d =2

   find difference absolute difference  of each element in array "a" with the element of array "b"

for   a[1] = 1, b[0] = 
  1-5 = -4
for   a[1] = 1, b[1] = 
  1-6 = -5
for   a[1] = 3, b[2] = 
  1-7 = -6
  Difference are [4,5,6]
  for  a[1] =1, there exists no  integer in the second array with absolute difference less than or equal to d =2

   find difference absolute difference  of each element in array "a" with the element of array "b"

for   a[2] = 5, b[0] = 
  5-5 = 0
for   a[2] = 5, b[1] = 
  5-6 = -1
for   a[2] = 5, b[2] = 
  5-7 = -2
  Difference are [0,1,2]
  for  a[2] =5, there exists at least one integer in the second array with absolute difference less than or equal to d =2

 comparator value   is  1

   function comparatorValue(a,b,d) {

   }

//  find a solution

   ..... Three Problem...and

## Data:
Example of a trade data JSON object:
```
{
    "id":1,
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134,
    "timestamp": 1531522701000
}
```

## Project Specifications:
The model implementation is provided and read-only. It has a timestamp field of DateTime type, which must be serialized to/from JSON's timestamp of integer type.

The REST service must expose the `/trades` endpoint, which allows for managing the collection of trade records in the following way:

**POST** request to `/trades`:

- creates a new trade
- expects a JSON trade object without an id property as a body payload. You can assume that the given object is always valid.
- adds the given trade object to the collection of trades and assigns a unique integer id to it. The first created trade must have id 1, the second one 2, and so on.
- the response code is 201, and the response body is the created trade object

**GET** request to `/trades`:

- returns a collection of all trades
- the response code is 200, and the response body is an array of all trades objects ordered by their ids in increasing order
- optionally accepts query parameters type and user_id, for example `/trades?type=buy&user_id=122`. All these parameters are optional. In case they are present, only objects matching the parameters must be returned.

**GET** request to `/trades/<id>`:

- returns a trade with the given id
- if the matching trade exists, the response code is 200 and the response body is the matching trade object
- if there is no trade with the given id in the collection, the response code is 404 with the body having the text `ID not found`

**DELETE**, **PUT**, **PATCH** request to `/trades/<id>`:

- the response code is 405 because the API does not allow deleting or modifying trades for any id value