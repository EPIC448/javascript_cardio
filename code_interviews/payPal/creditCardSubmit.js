
//----- Get data from ./myprograminput.txt  -- Working

const fs = require('fs')

fs.readFile('./myprograminput.txt', (err, data) => {
	if (err) throw err;
    let result = data.toString().split(" ")
      result = data.toString().split("\n")
	// console.log(result); //'Add Tom 4111111111111111 $1000'.. And continues to the second one. etc
	// return result; //'Add Tom 4111111111111111 $1000'.. And continues to the second one. etc
})

//------------- End of get data from javascript---- 

//----- Input form  terminal

process.stdin.once('data',
    (chunk) => {
        let test = chunk.toString().trim();
        let result = test.split(' ');
        console.log(result[0]) //Add
        console.log(result[1]) //Tom
        console.log(result[2])//4111111111111111
        console.log(result[3]) //$1000





        
        process.exit();
    })

  //----- input from terminal---  

class CreditCardProcessing {
    // Default will data We get from readFile from 'fs' function
    constructor(method, name, creditCardNumber,balance) {
        this.method = ""
        this.name = "",
        this.creditCardNumber = 0;
        this.balance = 0
        
    }
}

// const test = new CreditCardProcessing();

// console.log(test)

