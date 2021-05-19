
//     const fs = require('fs')
//     fs.readFile('./myprograminput.txt', (err, data) => {
//         if (err) throw err;
//         let result = data.toString().split(" ")
//         result = data.toString().split("\n")
//         console.log(result); //'Add Tom 4111111111111111 $1000'.. And continues to the second one. etc
        
//         //'Add Tom 4111111111111111 $1000'.. And continues to the second one. etc
//     })
console.log("Method of input"),
console.log(`method name creaditCard Number  $amount`)

process.stdin.once('data', (chunk) => {
        
    let test = chunk.toString().trim();
    let result = test.split(' ');
    // creditCardProcessing(result[0], result[1], result[2], result[3]);
    console.log(result[0]) //Add
    console.log(result[1]) //Tom
    console.log(result[2])//4111111111111111
    console.log(result[3]) //$1000

     process.exit();

})  
 



    


//------------- End of get data from javascript---- 
var hashMap = function(name, creditCardNum,amount){
    this.hashDict={};//dictionary
    this.name="";
    this.creditCardNum=0;
    this.balance ="" ;
    return this;
    }

    function valid_credit_card(value) {
        // Accept only digits, dashes or spaces
          if (/[^0-9-\s]+/.test(value)) return false;
      
          // The Luhn Algorithm. It's so pretty.
          let nCheck = 0, bEven = false;
          value = value.replace(/\D/g, "");
      
          for (var n = value.length - 1; n >= 0; n--) {
              var cDigit = value.charAt(n),
                    nDigit = parseInt(cDigit, 10);
      
              if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      
              nCheck += nDigit;
              bEven = !bEven;
          }
      
          return (nCheck % 10) == 0;
    }
      
function Account(name, creditCardNum, balance){
    // let obj = {}
    // let 
    return(name + "dasd", creditCardNum, balance)
    
    }
      
function creditCardProcessing(method, name, creditCardNum, balance = 0) {
    // Stringfy creditCardNum
 console.log(creditCardNum)
    // creditCardNum.toString()
    //check if Credit card is valid
    if(valid_credit_card(creditCardNum === true) ){
        
         createNewAccount(method,name, creditCardNum, balance) 
    } else {
        return `${name}: error`

    }

    //  console.log(method)
    //  console.log(name)
    //  console.log(creditCardNum)
    //  console.log(balance)

     // If the Credit Card Numvber is Valide, We go add it the Hash Map else. return Error.  
  
}

    // want to use the Name as the Keys, then you have the balance. etc.
    // put create account into an HashMap then we can iterate over them  

    /// USe the STDout Property. 
//     process.stdout.write("Geeks"); 
// process.stdout.write("for"); 
// process.stdout.write("Geeks");



