// /*

//  Amazing Source on API
// ENd Point that works in Terminal. 

// [
//  curl -H"Authorization: Basic ZmlsdGVyZWQ6YWRtaW4" -X GET "https://api.filtered.ai/q/foodtruck?hour=16&minutes=00&dayOrder=04"     


// this work also.

//  curl -H"Authorization: Basic ZmlsdGVyZWQ6YWRtaW4" --request GET "https://api.filtered.ai/q/foodtruck?hour=16&minutes=00&dayOrder=04"   

// ]


//   given a timestamp and API end Point return a list of FoodTrucks
//    Goals: write a function that Provide a list of food trucks'application' and location ids fetched from given API endpoint using given timestamp


//    NOTE: Can not use FETCH or AXIOS.  USe default Libraries while making requests to fetch data, as external library installation is not allowed


//   WHaT you need: 

//    >Include a HTTP Authorization Header, in the format of "Authorization :Basic xxxxx"(please get the header value from  the inbox)

//    > Convert the UNIX timestamp given to extract the day of the week, hour, minutes,(UTC format)

//    > Use the time extracted above as a parametets to FETCH the data of the food trucks that open at the given time and day form the API.

//    >Your REQUEST should have the Following PARAMETERS: hour, minutes, dayOrder


//    INPUT...
//   url =  https://api.filtered.ai/q/foodtruck
//    UNIX timestamp = 1602172800 - Used to extract day and time(UTC format)
//     token = ZmlsdGVyZWQ6YWRtaW4


//     INput Detailes
//     . first line is the URL for fetching food truck data.
//     . second line is UNIX timestamp to be used to extract day and time(UTC format)
//     .third line the API token needed in Authorization header when fetching food truck data.
//     Sample INput
//     dayOrder represent the day of the week in integer(0 represent sunday)



//     OUtput
//     most match Provide output below format below, no quotesm additional leading spaces, or trailing spaces.
//      output should be:

//      > list of food truck applicant that are open at the time and date provided in form of the UNIX timestamp in alphbetical orders.
//      >Each food truck should be in the format of "applicantlocationid" (Applicant and locationid,with a "," in the middle)
//      > for eaxample, if its friday, May 5 at 12pm, then I should only see food truck that are open on may 5 at 12 parametets
//      > If no match is found, return N/A

//      [{
//        "DayOrder": 2,
//        "DayOfWeekStr" : "Tuesday",
//        "starttime":"10am",
//        "endtime":"6pm",
//        "permit" : "19MFF - 00105",
//         and so on.....


//      },....]


//      TIPS: 

//      The timestamp is in UNIX FORMAT, make sure you are converting it correctly(UTC format).
//      . TO test proper timestamp use  the following:
//      1578830400.0 will convert to( 12 January 2020 12 pm)
//  */

// // Working Code


// function writeOutput(inputData) {
//   let url , token, timeStamp

// for(const element of inputData){


//     // const url = inputData.split(/(\s+)/)[0]
//     // // const timeStamp = inputData.split(/(\s+)/)[2]
//     // const token =  inputData.split(/(\s+)/)[4]

//      url  = element.url
//      token = element.token
//      timeStamp = element.unixTimeStamp
// }
// // UnixTimeStamp Formatter to UTC formate. 
//   const UnixTimeStamp  = timeStamp
//   const milliseconds = UnixTimeStamp * 1000
//   const dateObject  = new Date(milliseconds)

//       var days =['sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
//       var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]

//   let year  = dateObject.getUTCFullYear()
//   let monthWord = month[dateObject.getUTCMonth()]
//   let dayofweekWord = days[dateObject.getUTCDay()]
//   let dayOrder =  "0" + dateObject.getUTCDay() //shuould be 5, thursday
//   let date = dateObject.getUTCDate()
//   let hours =  dateObject.getUTCHours()
//     //   hours = hours ? hours : 12 // The hour '0' should be '12'
//     //   hours  = hours % 12

//   let minutes =    "0" + dateObject.getUTCMinutes()
//   let seconds = "0" + dateObject.getUTCSeconds()
//   let ampm = hours >=12 ? 'pm' : 'am'



// // const utcFormate = hours +':'+ minutes.substr(-2) + ':' + seconds.substr(-2);
//     const parameters = `hours=${hours}&minutes=${minutes}&dayOrder=${dayOrder}` 

//    const https= require("https");

// //   const header = {'Authorization' : `Basic  ${token}`} //working
//  //use the time extracted above as "utcFormat" PARAMETER to Fetch the data of the food TRUCKS  that open at the givrn time and day from the given API. 

//    const options = {

//   url: "https://api.filtered.ai/q/foodtruck%0A?hour=16&minutes=00&dayOrder=04",
//   method: "GET",
//   headers: {
//     "authorization": "Basic ZmlsdGVyZWQ6YWRtaW4"
//    }

//   }


//         // headers:{
//         //     // ZmlsdGVyZWQ6YWRtaW4

//         //     'Authorization' : `Basic  ${token}` 
//         // },
//         // url : url,
//         // utcTime: `${utcFormate}`



//   request = https.get(options,parameters,function(res){
//       var body = "";


//       res.on('data', function(data){
//           body += data;
//       });
//       res.on('end', function(){
//           console.log(body);
//       })

//       res.on('error', function(e){
//           console.log("Got error:" + e.message)
//           console.log(error)
//       })
//   })



// // //    https.get(options, (res) => {
// // //        console.log(res)

// // //        let data = '';

// // //        res.on('data', (chunk) => {
// // //            data += chunk;
// // //        });

// // //        res.on('end', () => {
// // //            console.log(JSON.parse(data));
// // //        }).on("error", (err) => {
// // //            console.log("Error", err.message)
// // //        })
// // //    });





// //     // return inputData;


// }

// let data = [{
//   url : "https://api.filtered.ai/q/foodtruck",
//   token :  "ZmlsdGVyZWQ6YWRtaW4",
//   unixTimeStamp : 1602172800

// }]

// console.log(writeOutput(data))

// /**
//   Code Summary Process. 
// .. Note.  I Used curl to get the Data. 
// //  */

//  Working Code----- Parfect fit. 

function queryApi(){


  //USe UNIXTime STamp to get UTC Formate to Use in API call . 
 
  let unixTimeStamp = 1602172800
 
 function utcFormate(timeStamp){
   let timeStampArray = []
   
    let milliseconds = timeStamp * 1000
    let dateObject  = new Date(milliseconds)
 
   let hours =  dateObject.getUTCHours()
   let minutes = "0" + dateObject.getUTCMinutes()
   let dayOrder = "0" + dateObject.getUTCDay() //shuould be 5, thursday
 
  timeStampArray.push(hours,minutes,dayOrder)
     return timeStampArray
 } 
 
 let utcFormateArray  = utcFormate(unixTimeStamp)
 
 let utcHours = (utcFormateArray[0]) //16 // Notice there are not in a string. 
 let utcMinutes = (utcFormateArray[1]) //00
 let utcDayOrder = (utcFormateArray[2])//04
 
      let https = require("https")
 
 
         const options = {
             'hostname': "api.filtered.ai",
             'port': null,
             'path': "https://api.filtered.ai/q/foodtruck?hour=16&minutes=00&dayOrder=04",
             'headers':{
                 "authorization": "Basic ZmlsdGVyZWQ6YWRtaW4"
             },
             'method': "GET",
 
         };
 
 
 
   let req = https.request(options,function(res){
         // console.log(options)
         // console.log('statusCode:', res.statusCode);
         // console.log('headers:', res.headers)
 
   var chunks = [];
 
       res.on("data", function(chunk){
           chunks.push(chunk);
       });
       res.on("end", function(){
           let body =Buffer.concat(chunks);
           let jsonObject = JSON.parse(body.toString())
           console.log(jsonObject)
       })
   })
 
   req.end();
 }
 
 console.log(queryApi())
 
 // ----------- Complation Of working code. ----
 
 // // Use native http or https module to send network request if needed.
 
 // process.stdin.resume();
 // process.stdin.setEncoding("ascii");
 // var inputData = "";
 // process.stdin.on("data", function (chunk) {
 //     inputData += chunk;
 // });
 // process.stdin.on("end", function () {
 //     // Do not edit: Output the solution to the console.
 //     const output = writeOutput(inputData);
 //     console.log(output);
 // });
 
 // // Filtered is using the nodejs v8 engine to process JavaScript. Please write your code inside the function block below.
 // // Our grading criteria is based on stream output, please return your output to log your final result.
 // let request = require("https")
 
 
 // function writeOutput(inputData) {
 //   return apiCall()
 
 // }
 
 
 /*
 
 function apiCall(){
 
  console.log("in APi function")
 
     const options = {
         method: 'GET',
         url: 'https://api.filtered.ai/q/foodtruck%0A',
         qs:{hour: '16', minutes: '00', dayOrder: '04'},
         "headers":{authorization: 'Basic ZmlsdGVyZWQ6YWRtaW4'},
     };
 
 
 request(options,function(error, response, body){
     if(error) throw new Error(error);
     console.log(body)
 })
 
 }
 
 */
 
 
 
 
 
 
 
 
 // const apiCall = (inputData) => {
 // // const url = inputData.split(/(\s+)/)[0]
 //     // const timeStamp = inputData.split(/(\s+)/)[2]
 //  const token =  inputData.split(/(\s+)/)[4]
 
 // // UnixTimeStamp Formatter to UTC formate. 
 //   const UnixTimeStamp = 1602172800
 //   const milliseconds = UnixTimeStamp * 1000
 //   const dateObject  = new Date(milliseconds)
 
 //     var days =['sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
 //     var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]
 
 //   let year  = dateObject.getUTCFullYear()
 //   let monthWord = month[dateObject.getUTCMonth()]
 //   let dayofweekWord = days[dateObject.getUTCDay()]
 //   let dayOfWeek =  "0" + dateObject.getUTCDay() //shuould be 5, thursday
 //   let date = dateObject.getUTCDate()
 //   let hours =  dateObject.getUTCHours()
 //     //   hours = hours ? hours : 12 // The hour '0' should be '12'
 //     //   hours  = hours % 12
 
 //   let minutes =    "0" + dateObject.getUTCMinutes()
 //   let seconds = "0" + dateObject.getUTCSeconds()
 //   let ampm = hours >=12 ? 'pm' : 'am'
 
 
 
 // // const utcFormate = hours +':'+ minutes.substr(-2) + ':' + seconds.substr(-2);
 
 
 //    const utcFormate = hours + ':' + minutes + ':'+ dayOfWeek 
 //    const https= require("https")
 
 // //   const header = {'Authorization' : `Basic  ${token}`} //working
 //  //use the time extracted above as "utcFormat" PARAMETER to Fetch the data of the food TRUCKS  that open at the givrn time and day from the given API. 
 
 
 
 //------------NEw livy refumater Code.---
 
 
 
 
 // function writeOutput(inputData) {
 //   return apiCall(inputData)
 
 // }
 
 // function apiCall(inputData){
 
 
 //  const url = inputData.split(/(\s+)/)[0]
 //  const timeStamp = inputData.split(/(\s+)/)[2]
 //  const token =  inputData.split(/(\s+)/)[4]
 
 
 //---  Time Section.. .Normally will be a sereprate funcition 
 
 /*
 // UnixTimeStamp Formatter to UTC formate.
   const UnixTimeStamp = 1602172800
   const milliseconds = UnixTimeStamp * 1000
   const dateObject  = new Date(milliseconds)
 
     var days =['sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
     var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]
 
   let year  = dateObject.getUTCFullYear()
   let monthWord = month[dateObject.getUTCMonth()]
   let dayofweekWord = days[dateObject.getUTCDay()]
   let dayOfWeek =  "0" + dateObject.getUTCDay() //shuould be 5, thursday
   let date = dateObject.getUTCDate()
   let hours =  dateObject.getUTCHours()
     //   hours = hours ? hours : 12 // The hour '0' should be '12'
     //   hours  = hours % 12
 
   let minutes =    "0" + dateObject.getUTCMinutes()
   let seconds = "0" + dateObject.getUTCSeconds()
   let ampm = hours >=12 ? 'pm' : 'am'
 // ------- ENd of Time Section --
 
  console.log("in APi function")
 
 
 
 
     const options = {
         method: "GET",
         hostname: "api.filtered.ai",
         port: null,
         path: "/q/foodtruck%0A?hour=16&minutes=00&dayOrder=04",
         headers:{
             "authorization": "Basic ZmlsdGVyZWQ6YWRtaW4"
         },
     };
 
 
 
   let req = https.request( options,function(res){
       var chunks = [];
 
       res.on("data", function(chunk){
           chunks.push(chunk);
       });
       res.on("end", function(){
           let body =Buffer.concat(chunks);
           console.log(body.toString())
       })
   })
 
   req.end();
 }
 
 */
 
 
 
 /*
 curl -H"Authorization: Basic ZmlsdGVyZWQ6YWRtaW4" --request GET "https://api.filtered.ai/q/foodtruck?hour=16&minutes=00&dayOrder=04"
 
  */
 
 
 