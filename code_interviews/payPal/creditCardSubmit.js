

/* Requiring fs module in which
 readFile function is defined.

 Get data from ./myprograminput.txt
 */

// const fs = require('fs')

// fs.readFile('./myprograminput.txt', (err, data) => {
// 	if (err) throw err;

// 	console.log(data.toString());
// })


/*
Input Read from a STDIN
*/



// STDIN---Input that comes from the terminal / Out Put the Data to the Terminal

let data = [2,3,2,5]
  

process.stdin.once('data',
    (chunk) => {
        let test = chunk.toString().trim();
        console.log("Hello, " + test + "!");
        process.exit();
    })

