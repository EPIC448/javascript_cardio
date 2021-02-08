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

console.log("testing")

 let stackFile = "HelloWorld"
 console.log(stackFile)
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
//  stack.push(3)
//  stack.push(4)
//  stack.push(6)
//  stack.push("erae")


 //const test = ("Working test") 
//console.log( test) // File not runing, need to be tested.


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

//   ------------ // Lint Code execrise. 
   // make sure the Code has a closing bracket
// Take a string of bracket, make sure that the close brackets match the 
//opening onces. 
var codeLinter = function(s) {
    const stack = [];
    
    // Using the open brackets as Keys and close brackets as values
    const brackets = {"(":")", "{":"}", "[":"]"}

    for (let i = 0; i < s.length; i++) {
        // Push all open parentheses onto stack
        if (brackets[s[i]]) stack.push(s[i]);
        // Check if you reach a closing bracket
        if ([ ")", "}", "]"].includes(s[i])){
            let bracket = stack.pop();
            // check if the last element in the stack is the corrrect open bracket
 //console.log(brackets[bracket])
           
            if (brackets[bracket] === s[i]) continue;
        //    The above line is indicating that 
        //   brackets {'(', '{', '['} which are keys now will have bracket()which were popped off a.k.a([‘)’, ‘]’, ‘}’]) in it?
        
        //      And s[i] will be what after each iteration?  
            else return false;
        }
    }
    // check if there is anything left in the stack
    // If there is not, return true, else return false
    return stack.length === 0;
};


let s = "()[{{}" // false
let s1 = "{[]}" // true


//console.log(codeLinter (s1)) // Working  great. And return correct answer
  
  
  /* 
   ---------------------- Queues-------------------------------
    This uses the First In First Out (FIFO) Principle.
     Think of the line at the DMV.  First come, first serivce

      Array = 5,9,100,2,4
            last            first

          to remove the first element in the array we use .shift

  */
//

 class Queues {
    
    constructor() {
       this.stack = []
       this.size = 10
       this.rear = 0
    }
   

  //Add or enqueue
     add = (element) =>{
       // check to make sure that stack is not full
       if(this.rear < this.size){
           this.stack[this.rear] = element
         this.rear++
    }
     // Get the length of the queues.
    retrun (this.rear)
  }

  //remove or dequeue()
    remove = (element) =>{
        if(this.isEmpty() === false){
        this.rear = this.rear-1;
        return this.data.shift()
        }
    }

    search = (element) =>{
        return this.stack.lastIndexOf(element)
    }
    
    print(){
        for(let i = 0; i< this.rear; i++){
            console.log(this.data[i])
        }
    }
 }
 
 //const queues = new Queues()
  //console.log(queues.add(3) ) // Not working Yet. Invesitage. 

 //  stack.push(4)
 //  stack.push(6)
 //  stack.push("erae")

//  ---------------------------Reverse a String using Queues-------
const reverse = (str) => {
    let queues = []

    for(let i = 0; i < str.length; i++){
        queues.push(str[i])
    }
    let reverseStr = ""
    while(queues.length > 0){
         reverseStr = queues.pop()
         console.log(reverseStr)  //=>retepdcba
    }
}

console.log(reverse("abcdpeter")) //> Need to work on this. 
