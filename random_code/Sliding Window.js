
giving array of [1,9,-1,-2,7,3,-1,2]
  k = 4 size of window

  function getMaxsumArrayofSizeK(arr,k)
   // Picture arr as arr[]

    [1,9,-1,-2,7,3,-1,2]
i =  0,1, 2, 3,4,5, 6,7    

let windownSum =0 , maxSum = 0
 for (let i = 0; i < k; i++){

    Because window only goes to 4
    [1,9,-1,-2,] 7,3,-1,2
i =  0,1, 2, 3,4,5, 6,7

1,[9,-1,-2, 7,]3,-1,2
     
    windownSum += arr[]   first iteration it add (arr[0] +arr[1] +arr[2]+arr[3])
                                                    1      9        -1      -2
                          second itereation  it add (arr[0] +arr[1] +arr[2]+arr[3])
                                                        9     -1      -2     7
                                    The process Repeats. Calculating only what is in the window. 

                                      Till end of the array 

              //second loop
              //end = refer to the end of the array
              for(let end = k; end < arr.length; end++){
                  windownSum +=arr[end] -  arr[end - k] 
                //   Refering to line 31..  
                //  end here is refering are INDEX.  Keeping the total in the window and Adding the NEXT ELEMENT IN THE ARRAY AND removing the previous
              //  windownSum +=arr[end] -  arr[end - k] 
              ///This is important  
            //1st itereation    windownSum = windowSUM + arr[end(which is K index a.k.a =4)]  - arr [end which is (-2) -  k=4 ] 
                   [1,9,-1,-2,] 7,3,-1,2
                   
                   [1,9,-1,-2,] 7,3,-1,2
                   [1,9,-1,-2,] 7,3,-1,2
                   [1,9,-1,-2,] 7,3,-1,2  

                  maxSum = Math.max(maxSum, windownSum)
              }                         
      return maxSum 

 }

        

  

