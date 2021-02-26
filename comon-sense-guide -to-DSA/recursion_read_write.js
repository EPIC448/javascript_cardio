/*  Reading Recursion And what to pay attention too

It a function that calls itself repeated still a condition is met, normally a base case

Such as example .. just an example

 function counterDownTimer(n) {
   if(n <= 0) return 1  // considered base case.

    while (n > 0) {
        console.log (counterDownTimer(n - 1) )
    }
}

 console.log(counterDownTimer(5)) // working but Yeild an infinity loop 

 Many cases of loops, we can use recursion
*/

 console.log("test recursion code")
 

 /*  Write  RECURSION------------ The is uses a BUTTOM-UP Method
 All recursion most have a base case else, INFINITY Loop
  The Idea is that problems are broken down into small pieces
 
 */

  function doubleArray(array, index = 0) {
       
    //   if(index >=  array.length) return array[index]
    // array[index] *= 2    
    //  doubleArray(array, index +1 )

    if(index >= array.length) return array
       
    return doubleArray(array[index] *= 2, index ++) 
  }
   // console.log(doubleArray([1,2,3,6,11], 0)) // need a little work. 

  //-------- Calculating Recursivly----------------
  //  ----------------- Factorial example----------
 
 const factorial = (num) => {
    if(num === 1){ 
        return 1
    } else{
     return    num * factorial(num -1)
      /*
               3 * factorial(3 -1)  =2
                2 * factorial(2 -1) = 1
                1 * factorial(1 -1) = 0
                0 * factorial(0 -1) = 0 ... this is where we hit the base case.. 
                                             than it start to add it all back up. the stack 
 
       this shows sign of the LIFO  principle from "STACK" data structure. 
        the last execustion  [0 * factorial(0 -1) = 0]  is POP off the stack as it goes back up the 
        chain of command and add up the results recursively
                 
                */
                  
    }
  } 
  // console.log(factorial(3))  working

  /*There are Two approached to Recursion. Top Down and Buttom-up
  
   Using forLoop with   BUTTOM-UP Approach. Because we are counting from 0 and increasing by 1 till
   we hit the target  with the help of our basecase. 
    Note: Change the PARAMETER to fit your  equation.
   
    Main Idea: we start  our giving INPUT and work backeard toward the basecase. 

    write a function that print out till 10 
   */
  
   function buttom_up(num, i=1, product = 1) {
        if(i > num) return product
        return buttom_up(num, i+1, product * i)
          /*  
                buttom_up(4, i+1 =2, 1 * 2 =2)
                buttom_up(4, 2+1 =3, 2 * 3 =6)
                buttom_up(4, 3+1 =4, 6 * 4 = 24)
                 because  i = 4 and our base case states
                          if(i > num) return product  which is 24

                buttom_up(4, 4,  return 24)

          */
   }

  // console.log(buttom_up(4)) //working

 

 /* ----- Stop at working on the TOP_DOWN approach Helps to focus on subproblem of the giving equation

  Example

 */
 const  sum =(array)=>{
   if(array.length === 1) return 1 //base case
   return array[0] + sum([1, array.length - 1])
   //         2      +      1-40
   //         2       +     1-10,
  }
  //console.log(sum([2,1,10,40])) // Right now, Stack overflow. 


  // ---- Count X using this method
  //Input  = "axbxcxd"
  const countingX = (string) => {

    if(string.length ===0) return 0

    while (string[0] ==="x") {
      return 1 + countingX(string[1, string.length -1])
    }
      return countingX(string[1, string.length -1])
    }
  

  console.log(countingX("axbxcxd")) // need to refactor.

  // --------- Reverse a string using the Top_down method
 // input = "fAther"
  const reverseString = (string) => {
    if(string.length ===1) return "string is 1"
    return reverseString(string[1, string.length -1]--) + string[0]
  }
  //console.log(reverseString("fAther")) // Not working yet.


//  ------- StarCase Problem using the Top-down Method-------
 /* 
  Staircase of N Steps, A person can only climb N stair  by step 
  1 stair at a time
  2 stair at a time
  3 stair at a time
   How many different path of combination is possible to the top of the stairs. 
   Assume N = 5
  
   stair possible combinations
   1+1+1+1+1 = 5
   2+2+1= 5
   2+3 = 5
   3+1+1=5
  */

    const climbStair = (n) =>{
 if(n == 0 || n ==1) return 1
 if(n <0) return 0
 return (n-1)   +   (n-2)   +   (n -3)
    /*  5-1 =4      5-2=3        5-3 =2
       4-1 =3       3-2 =1       2-3 = -1 
       3-1 =2       1-2= -1
       2-1=1
       1=0 = 0
      Onces it solve the sub-problems., it adds the total back up to ward the stack 
     */
  
    }
    //console.log(climbStair(5)) // 9 possible combinations

    // Start on Chapter 11 execrise