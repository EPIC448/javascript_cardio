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
 

 /*  Write  RECURSION
 All recursion most have a base case else, INFINITY Loop
  The Idea is that problems are broken down into small pieces
 
 */

  function doubleArray(array, index) {
      
      if(index >=  array.length) return array[index]
    array[index] *= 2
     doubleArray(array, index +1 )
  }
  //  console.log(doubleArray([1,2,3,6,11], 0)) // need a little work. 

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
  //console.log(factorial(3))

  /*There are Two approached to Recursion. Top Down and Buttom-up
  
   Using forLoop is  BUTTOM-UP Approach. Because we are counting from 0 and increasing by 1 till
   we hit the target  with the help of our basecase. 
   // Note: Change the PARAMETER to fit your  equation.

    write a function that print out till 10 
   */
  
   function buttom_up(num, i=1, product = 1) {
        if(i > num) return product
        return buttom_up(num, i+1, product * i)
          /*  
                buttom_up(4, i+1 =2, 1 * 2 =2)
                buttom_up(4, 2+1 =3, 2 * 3 =6)
                buttom_up(4, 3+1 =4, 6 * 4 = 24)
                 because  i = 4 and our base case says
                          if(i > num) return product  which is 24

                buttom_up(4, 4+1 =5,  return 24)

          */
   }

   console.log(buttom_up(4))
