/* Notes: both are Array data structures with restrictions 
Sources for Details : https://www.javascripttutorial.net/javascript-stack/

 Stacks: follows Last In First Out principle(LIFO). Such as the Stack of Dishes
  Stack will look
 
  stack1   stack2   stack3              Pop off the top so  we remove 8,
  8        4        3                                                 4
  4        3        6                                                 3   
  3        6     
  6

   Like most Data structure, You have to implement yourself. 

*/
//Stacks
 class Stack {
     // has a bucket that we will keep the elements in.

      bucket = []

      //Methods

      //add
       add = (Element) =>{
           return this.bucket.push(Element)
       }
      //pop/remove
      pop = (Element) => {
          return this.bucket.pop() // auto-remove the last elements in the array
      }

      //read or search
      search = (Element)=> {
          return this.bucket.lastIndexOf()
      }
 }

 const stack = new Stack()
 stack.push(3)
 stack.push(4)
 stack.push(6)
 stack.push("erae")


 const test = ("Working test") 
console.log( test) // File not runing, need to be tested.


// ------------ Reverse a String. ---------
const reverse = (str) => {
    let stack = []

    for (let i = 0; i < str.length; i++){
        stack.push(str[i])
    }


    let reverseStr = ""
    while (stack.length > 0) {
        reverseStr += stack.pop()
    }

     return reverseStr
    
   }
   
   // console.log(reverse("john"))  // nhoj.. working. 