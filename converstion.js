// Javascript coding Conventions.

//Magic Number  or Anonymos number

// if you gonna us a variable in a loop, Makes sure it assigned to something, 

let assignedNum = 234
 for (let i = 0; i < assignedNum.length; i++) {
     const element = assignedNum[i];
    
 }

//---------------Deep nested Loop --------------
// [If something has a Nested loop pass 2 level, Extrapulate it out into a 
//     function that can be reused]

const exampleArr = [[['value ']]]
  // Break DRY rule, and Deeply nested, NOte Good.
exampleArr.forEach((array) => {
    array.forEach((array2) => {
        array2.forEach((el) => {
            //console.log(el)
        })
    })
 }
)

// -- Deep Nesting --------Solution 2

const getValue = (element) => {
    if (Array.isArray(element)) {
         return getValue(element[0])
    }
    return element
}
// console.log(getValue(exampleArr))   //=> value 
 

/*-------------STOP writing comment------------
 Write code in simplest, plainest, most self documenting way u can human come up with.
 ---- Your Code should Speak for it self. 
 -- Self documenting 

*/

//--- Avoid large function -----------
 // May not seem like much, but when code is large.... It becomes a issues. 
function large() {
    const additon = a + b;
    const multiply = a * b;

    const minus = a - b;
}
   
//------------- Solutions---  Put into sepreate functions/ 
 const add = (a,b,c)=>{a + b + c} 
const multiply = (a,b,c)=>{a + b + c}
const subtract = (a,b,c)=>{a + b + c}
//------------  End of Avoid large function----


// Code Repetion. [If you need to Copy a block Code, extract it into another function.]
const getUser = (user) => {
    const name = user.name;
    const surman = user.surman
    // we are repeating the same Process. 

}
 
 //------- Solutions----------
 const getUserInfor = (user) => {
    const { name, surman, password} = user
 }

 //----- Camel Case---- Always start with a lowercase letter. 

 //--------- Use Meaningful name----- 
  
  // Choose Descriptive over concise when needed--- "getUserName" is good when Cant come up with a short name. 
  // But "getUser" work just aswell.  Depends on the situation 


  // Use Consistant verbs per concept
  /* 
   IF you have 
    getName
    getEmail.....   Just use get Verb for all of it, Is important. 


    
  */

   /**
     //Make  Booleans Read well.....
       let car = {}.... Instead of car.sold, car.green  etc...
        You say, if: 
        car.isSold, 
        car.isGreen
         car.isInsured. 
           etc... 
           Make code read better. 
    */

    // Use Nouns for className
class Car = {
    //...... Class is always Upper case  or PascalCase (i.e CarGreen). 
}
    
/* Capitalize constant values Snake Upper Case, And Use for primitive value.
    used mostly for Things That cant be changed like the Hours of the Day, or Age.
    const Hours_IN_DAY = 24
    const User_Age = 30
 */

// Avoid one-letter Variable names..... 
// It become Easy to forget, You can limit them to Super Small function, Like a Loop

const q = () => { }  // No idea what Q mean

   const   query = () =>{ } // is much better. 


   ===============================
   A way to write javascript function to call its self immediatly.  And call an anonymous function


   https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife

   (function () {
    console.log("A cozy nest is ready");
  })()
 //=> "A cozy nest is ready"  