
//new javascript node test
 let num = 20_4334_2323
 
let stringReplace = "here the wild things are"
   stringReplace = stringReplace.replace('w', '?')
//  console.log(stringReplace)  //> here the ?ild things are


 /* working
 And and equals (&&=)
The and and equals operator performs the assignment
 only when the left operand is truthy. Let’s see an example:
 */

// let situation1 = 30
// let situation2 = 'and and equal'
 
// if (situation2) { situation1 = situation2 }
// //    or
//  situation1 &&= situation2


 /* working
 Or or equals (||=)
On the opposite spectrum of &&=, the logical OR performs the assignment only 
when the left operand is falsy. As usual, let’s see an example:
 */
let situation3 = false
let situation4 = 'or or equal'
 
if (!situation3) { situation3 = situation4 }
//    or
// console.log(situation3 ||= situation4)
 

 /* Working
 Similarly to the Nullish Coalescing Operator,
  an assignment is performed only when the left operand is nullish or undefined.
   But if situation 5 is assigned, It Show what is in situation5. 
 */
let situation5 
let situation6 = 'nullish or Undefind'
 
if (!situation5) { situation5 = situation6 }
//    or
 console.log(situation5 ??= situation6)