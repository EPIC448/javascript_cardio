
//https://www.youtube.com/watch?v=rRgD1yVwIvE

// NOte.... Know deep how each of the Methods work independently and together is where the challenge it. 
// High order functions for ARRAYS are.  map, reduce, filters,  They all can do .....
// array.HIGH - ORDER JAVASCRIPT METHOS(function (accumulator, current value, current index), array => 0
// details included below for those methods.  



const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  let ages = [33, 12, 20, 16,100, 5, 54, 21, 44, 61,31,15,45,25,64,32];

// ------------ Start of Higher Order Function ---------------------


              // --------filter----- GET 21 AN OLDER
              // The callback function passed to the filter() method accepts 3 arguments: element, index, and array.
              //      // Using ForLoop
              // let canDrink = []
              // for (let i = 0; i < age.length; i++){
              //   if (age[i] >= 15) {
                
              //     canDrink.push(age[i])
              //   } 
              // }
              // console.log(canDrink)   //=> [ 33, 20, 16, 54, 21, 44, 61 ]

              // const canDrink = age.filter(function (eachAge) {
              //    // If U want in order. We use SORT. 
              //   if (eachAge >= 21) return age.sort(function(a,b){return a - b});
              //  })
              // console.log(canDrink) 
              

                // Filter out companies that are Retails. 

              // let retailComp = companies.filter(function (company) {
              //   // console.log(company.category)
              //    if(company.category === "Retail") return company
              // })
                  // -----------OR----------
                // const retailComp = companies.filter(company => company.category === "Retail")


                //console.log(retailComp)

                  /*
                  { name: 'Company Two', 
                  category: 'Retail', 
                  start: 1992, 
                  end: 2008 }, 
                { name: 'Company Four', 
                  category: 'Retail', 
                  start: 1989, 
                  end: 2010 }, 
                { name: 'Company Nine', 
                  category: 'Retail', 
                  start: 1981, 
                  end: 1989 } ] 
                at ​​​retailComp​​​ ​java
                  */
                

                  //--------------------Get companies that Start in the 80s
              /// Note: filter can take an CALLBACK, INDEX,ARRAY
              /*
              const eightyComp = companies.filter(function (company, index, array) {
                if (company.start >= 1980 && company.start <= 1990) { return company }
                console.log(index)  // => 1,2,4,7
              }
              )

              console.log(eightyComp)
              */

              // Get Company Last more than 10 years. 
                /*
              let companiesLastTenYr = companies.filter(company => company.end - company.start >= 10)  
                


              console.log(companiesLastTenYr)
                */
              //............................. End of Filter............

              
              // -------------------Map------------------------------
                //map   .... Map can take in a Index aswell.  
                // The callback function passed to the map() method accepts 3 arguments: element, index, and array
                //const ageSquare = ages.map(function (age, index){ return Math.sqrt(age)}) 


                /*
                can do something like.... 
                  const ageMap = ages
                      .map(age => math.sqrt(age))    => we square it here.
                      .map(age =>age * 2)  => mutiply by 2. 
                
                */



              const companyNames = companies.map(function (company) {

                // get company name, Start and end Date.
                return `${company.name} [${company.start}]   [${company.end}] `
                  //return List of Company  == >  [ 'Company One [1981]   [2003] ',
                  }   
              )
              // console.log(companyNames )



              // const ageSquare = ages.map(function (age, index){ return Math.sqrt(age)})
              
              // console.log(ageSquare) 

              //    /*
              //    5.744562646538029, 
              //   3.4641016151377544, 
              //   4.47213595499958, 
              //   4, 
              //   10, 
              //   2.23606797749979, 
              //   7.3484692283495345, 
              //   4.58257569495584, 
              //   6.6332495807108, 
              //   7.810249675906654 ] 
                
              //    */


                //----------------____End  of Map------------------




                //-------------reduce-----------------------
                  // Look to add all the numbers into 1.
                  /*
              The reduce method accepts two parameters: 1) The reducer function (callback), 2) and an optional initialValue.
              The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.
              If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array.
              If no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.


                  arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
                // return result from executing something for accumulator or currentValue
              }[, initialValue]);

                    

              i.e //array.reduce(function( accumulator, current value, current index), array => 0)

                    */
                  
              // let ageSum = 0

              //       for (let i = 0; i < ages.length; i++) {
              //         ageSum += ages[i];  //=> 366
                      
              //       }
              //       console.log(ageSum)  => 366


              const reduceAge = ages.reduce(function (total, age) {
                // Can take an index too
                return total + age

              },  0)
                
                //console.log(reduceAge)

                // Get Total Years for Each companys. 
              const totalYears = companies.reduce(function (accumulator, company) {
                return accumulator += company.end - company.start
                
              },0)

              // console.log(totalYears) => 118

  //------------end of reduce---------------

  



// ------------ ENd of Higher Order Function ---------------------


  //----------------sort-----------Sort company by start year - end year----------------

const sortedCompanies = companies.sort(function (c1, c2) {
     //Note: c1 - company1 and company 2 ///  Sorting by Start date of company. 
   return (c1.start > c2.start) ? 1 : -1
  })
   

  //console.log(sortedCompanies)
   
let orderAge = ages.sort(function (a, b) {
   return (b - a  ) //=>[ 100, 61, 54, 44, 33, 21, 20, 16, 12, 5 ] 
   // return a -b,  goes from smallest to largets. 
 
  })
  //console.log(orderAge)

  //-------------------End of SORT----------------

 //onsole.log(companies)

  // for (let i = 0; i < companies.length; i++) {
  //   const element = companies[i];
  //   console.log(companies)
    
  // }


// ------------------------ForEach----------------

// companies.forEach(function (company, index, companies) {
//   // Can take up to 3 Argment.  
    
//   console.log(company.name,  company.start, "-", company.end, index )
//     /*  => Company Two 1992 - 2008  1   . . .   For each company in our array 
//            Company three 1999 - 2007  2   . . . 
//      */
// })
      
//--------------- End Of ForEach--------------------


//for..in
  // for...of
  //spread
  //slice..
  // ..
  // -------- End of Combined Methods--------------------


  //Javascript function are OBJECT cus we can give it property ... such as .lang
// const greeting = () => { console.log('world') }

// greeting.lang = 'English'
// console.log(greeting.lang )
