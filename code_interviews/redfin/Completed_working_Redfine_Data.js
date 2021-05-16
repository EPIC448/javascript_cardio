




//  PRESS PLAY to Run Code

// Problem area  suggestion is on line 112


/*
  Code Question 

    given a timestamp and API endPoint to return a list of FoodTrucks

  NOTE: Can not use FETCH or AXIOS.  USe default Libraries while making requests to fetch data, as external library installation is not allowed
   Goals: write a function that Provide a list of food trucks'application' and location ids fetched from given API endpoint using given timestamp


   WHat you need: 

  >Include a HTTP Authorization Header, in the format of "Authorization :Basic xxxxx"(please get the header value from  the inbox)
  > Convert the UNIX timestamp given to extract the day of the week, hour, minutes,(UTC format)
  > Use the time extracted above as a parametets to FETCH the data of the food trucks that open at the given time and day form the API.
  >Your REQUEST should have the Following PARAMETERS: hour, minutes, dayOrder

    INPUT.. SAMPLE.
   url =  https://api.filtered.ai/q/foodtruck
  UNIX timestamp = 1602172800 - Used to extract day and time into (UTC format)
   Basic token = ZmlsdGVyZWQ6YWRtaW4


    Input Detailes
     . first line is the URL for fetching food truck data.
     . second line is UNIX timestamp to be used to extract day and time(UTC format)
     .third  line is the API token needed in Authorization header when fetching food truck data.
    
     Sample Input
     . dayOrder represent the day of the week in integer(0 represent sunday)



    Output...
     most match Provided output formate  below , no quotes additional leading spaces, or trailing spaces.
     output should be:

      > list of food truck applicant that are open at the time and date provided in form of the UNIX timestamp in alphbetical orders.
      > Each food truck should be in the format of "applicantlocationid" (Applicant and locationid,with a "," in the middle)  
      > for eaxample, if its friday, May 5 at 12pm, then I should only see food truck that are open on may 5 at 12 parametets
      > If no match is found, return N/A


   RESTFUL Response will look like: 
     [{
       "DayOrder": 2,
       "DayOfWeekStr" : "Tuesday",
       "starttime":"10am",
       "endtime":"6pm",
       "permit" : "19MFF - 00105",
        and so on.....

     },....]


     TIPS: 

     The timestamp is in UNIX FORMAT, make sure you are converting it correctly(UTC format).
     . TO test proper timestamp use  the following:
     1578830400.0 will convert to( 12 January 2020 12 pm)
 

*/








function queryApi(){

  let unixTimeStamp = 1602172800
 
    let milliseconds = unixTimeStamp * 1000
    let dateObject  = new Date(milliseconds)
 
   let hours =  dateObject.getUTCHours()
   let minutes = "0" + dateObject.getUTCMinutes()
   let dayOrder =  dateObject.getUTCDay() //shuould be 5, thursday
 
 
 let url = `https://api.filtered.ai/q/foodtruck?hour=${hours}&minutes=${minutes}&dayOrder=0${dayOrder}`
 let token =  "ZmlsdGVyZWQ6YWRtaW4"
  
 
      let https = require("https")
   
 
         const options = {
             'hostname': "api.filtered.ai",
             'port': null,
             'path': url,
             // "https://api.filtered.ai/q/foodtruck?hour=16&minutes=00&dayOrder=04",
             'headers':{
                 "authorization": `Basic ${token}`
             },
             'method': "GET",
 
         };
 
 
 
 
   let req = https.request(options,function(res){
 
   var chunks = [];
 
       res.on("data", function(chunk){
           chunks.push(chunk);
       });
       res.on("end", function(){
           let body =Buffer.concat(chunks);
           let jsonObject = JSON.parse(body.toString())
          findObjectByLabel(jsonObject)
       })
   })

   req.end();

var findObjectByLabel = function(obj) {

let arrayOfData = []

    for(const key in obj){
      for(const nestedkey in obj[key]){
        arrayOfData.push(obj[key][nestedkey])
      }
    }
    return orderedData(arrayOfData)
};


// console.log(dayOrder) //4
  // console.log(hours) //16


const orderedData = (data, dayOfWeek = `${dayOrder}`, time = `${hours}:00`) => {
 let result = []
 data.filter(function(foodTruckData,index){
  if(foodTruckData.DayOrder == dayOfWeek && foodTruckData.start24 < time || foodTruckData.start24 > time ){
    
     result.push(`${foodTruckData.Applicant},${foodTruckData.locationid}`)
    // console.log(`${foodtruck.Applicant},${foodtruck.locationid}` )

   }

 })

  return result.sort().forEach(function(eachTruck){
       console.log (eachTruck)
 })
 
}


   
 }
 
 console.log(queryApi())


