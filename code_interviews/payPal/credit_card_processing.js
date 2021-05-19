 /*. READ Question And UNDERSTAND IT, WRITE IT OUT AS NEEDED. DO NOT OVER THING IT. VERY IMPORTANT. 
  DO NOT IMPLEMENT EXTRA FEATURES
   Sources Code ONLY
  */

/* Key Points in the assignment / Basic Credit Card Processing

 Features: Add New Credit Card accounts
           Process charges
           Credits against CHARGES
           Display or Print out the Summary information 

  Requirements - 1: 
        No artifacts or Binary Dependencies
        Most include AUTOMATED TESTS in the submission
    You may implement your own Luhn 10 check, or you may use an external library.
      We do not prefer either approach over the other, but your solution will be
      assessed on correctness and testing.
    In addition to your source code and tests (remember, no binaries), please also
    README that explains:
      An overview of your design decisions
      Why you picked the programming language you used
      How to install any required dependencies (runtimes, frameworks, etc)
      How to build, package or compile your code if applicable
      How to run your code and tests

    
 Requirement -2:
        Program accepts 2 input from two sources:
      √ A filename Passed as a commond line argument,  ./myprograminput.txt;
         input read from STDIN,   .myprogram < input.txt.

        Program most read the whole input 

        Program most accept 3 input command with space delimited arguments:
        "Add" -> Create a new credit card for a given Name, CardNumber, Limit
                Card Number Validated using Luhn 10
                New cards starts with a $0 balance. 

        "Charge" -> Charges increase the balance of card assoicated with Provided name by the amount specified.
                    Charges that raise the balance over the Limit are ignored as if declined
                    Charges against Luhn invalid cards are ignored also.

        "Credit" -> decrease the balance of the card assoicated with the provided name by the amount specified.
                    Credits that would dropt balance below $0 will create negative balance
                    Credits against Luhn 10 Invalid cards are ignored.
        
         When Input has been Read, and Processed, a summary should be generated and written to STDOUT in the formate shown below. 
         Summary includes:

         name of each person followed by a colon and balance.
         name displayed alphabetically -  .sort() method
         Display "error" instead of the balance if the credit card number does not pass Luhn 10

------  Input and Output:-------
Given the following input:

Add Tom 4111111111111111 $1000
Add Lisa 5454545454545454 $3000
Add Quincy 1234567890123456 $2000
Charge Tom $500
Charge Tom $800
Charge Lisa $7
Credit Lisa $100
Credit Quincy $200

Your program must produce the following output:

Lisa: $-93
Quincy: error
Tom: $500

----------------Input Assumptions:----------
All input will be valid. For example, 
you DON'T need to CHECK for or gracefully handle:
Illegal characters
Malformed commands
Capitalization changes
Multiple "Add" commands for the same name
Different names with the same credit card number
"Charge" or "Credit" commands without a preceding "Add" command

All input will be space delimited.
Credit card numbers may vary in length up to 19 characters.
Credit card numbers will always be numeric.
Amounts will always be prefixed with "$" and will be in whole dollars (no
decimals).






-----------                    My Question. 
                    what is a STDOUT. javascript

 */



 
 /*
  Valid Credit Card Algorithem.

  */

  // Takes a credit card string value and returns true on valid number
  // Test Validation
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
  
  
  /*
   Your program must accept input from two sources:
  a filename passed as a command line argument, like ./myprogram
  input.txt ;
  input read from STDIN, like ./myprogram < input.txt .
  
    Resources :   Passing Arguement into the command Line.  Very helpful .
    https://nodejs.org/docs/latest/api/process.html#process_process_argv






    // Algrithem Most be able to accept input from 2 sources...  Terminal input or the File input
/* Requiring fs module in which
 readFile function is defined.

 Get data from ./myprograminput.txt
 */

const fs = require('fs')

fs.readFile('./myprograminput.txt', (err, data) => {
	if (err) throw err;

	console.log(data.toString());
})


/*
Input Read from a STDIN -- Terminal Input -- working 

// STDIN---Input that comes from the terminal / Out Put the Data to the Terminal, Right after
// resources: https://www.geeksforgeeks.org/node-js-process-stdin-property/

process.stdin.once('data',
    (chunk) => {
        let test = chunk.toString().trim();
        console.log("Hello, " + test + "!");
        process.exit();
    })


   */
  


    /*------Account number Flow.-------
 
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function(amount) {
  if (this._isPositive(amount)) {
    this.balance += amount;
    console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (this._isAllowed(amount)) {
    this.balance -= amount;
    console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype.transfer = function(amount, account) {
  if (this.withdraw(amount) && account.deposit(amount)) {
    console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
    return true;
  }
  return false;
}


Account.prototype._isPositive = function(amount) {
  const isPositive = amount > 0;
  if (!isPositive) {
    console.error('Amount must be positive!');
    return false;
  }
  return true;
}

Account.prototype._isAllowed = function(amount) {
  if (!this._isPositive(amount)) return false;

  const isAllowed = this.balance - amount >= 0;
  if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
  }
  return true;
}

const a = new Account('a', 100);
const b = new Account('b', 0);


output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;

a.transfer(100, b);

output.innerText += `after:  a: ${a.balance}, b: ${b.balance}\n`;
<div id=output></div>
    
  ----- End of Account Flow.  */
  
  /*
   space Delimited Files and what there Look
   like
   https://www.djswebdesign.com/creating-a-space-delimited-text-file/#:~:text=A%20space%20delimited%20text%20file%20is%20a%20flat%20data%20file,on%20SPACING%20as%20the%20delimiter.
  
   Using as DElimited File into array as a look-up table.
  
   https://stackoverflow.com/questions/56619678/javascript-reading-a-whitespace-delimited-text-file-into-array-and-use-as-look
   
   Read from a Txt file
   https://www.geeksforgeeks.org/javascript-program-to-read-text-file/
   

   using STDIN How to use the Right way.
   https://www.geeksforgeeks.org/node-js-process-stdin-property/

   */