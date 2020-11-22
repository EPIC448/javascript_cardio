
//https://www.youtube.com/watch?v=rRgD1yVwIvE

// NOte.... Know deep how each of the Methods work independently and together is where the challenge it. 
// High order functions for ARRAYS are.  map, reduce,   They all can do .....
// array.HIGH - ORDER JAVASCRIPT METHOdS(function (accumulator, current value, current index), array => 0)
// details included below for those methods.  
// Filter Take only 3 ARGUMENTS



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

// console.log(filter1(test))


              // --------filter----- GET 21 AN OLDER
              //let newArray = arr.filter(callback(currentValue[, index[, array]]) {
                // return element for newArray, if true
              //}[, thisArg]);

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
                

                  //--------------------Get companies that Start in the 80s--------
              /// Note: filter can take an CALLBACK, INDEX,ARRAY
              
              const eightyComp = companies.filter(function (company, index, array) {
                if (company.start >= 1980 && company.start <= 1990) { return company }
                console.log(index)  // => 1,2,4,7
                //console.log(array)  // Return all the Array as a Whole
              }
              )

              //console.log(eightyComp)
              

              // Get Company Last more than 10 years. 
                /*
              let companiesLastTenYr = companies.filter(company => company.end - company.start >= 10)  
                


              console.log(companiesLastTenYr)
                */



                  /// List company based on Search Categoreis

               const getSearchedComp =(arr, query) => {
   
                return arr.filter(function(eachComp){
                  return eachComp.category.toLowerCase().indexOf(query.toLowerCase()) != -1

                  //The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1
                  // if the value to search for never occurs.Note: The indexOf() method is case sensitive
                  })
                
             }
          
          
          // console.log(getSearchedComp(companies, "Retail"))

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



              const companyNames = companies.map(function (company,index, arr) {



                
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





               /// Exercries. Find a company based on the Query of catergories. 
          
            // list out companoies based on Query researched. 
             const getcompanyCategory =(arr, query) => {
               
                  return arr.map(function(eachComp){
                    return eachComp.category.toLowerCase().indexOf(query.toLowerCase()) != -1 ? eachComp : "NaN" 
                   // What the -1 means The first index of the element in the array; -1 if not found
                    })

               }
               //console.log(getSearchedComp(companies, "il"))
                
                 /*
               => [{
                     name: 'Company Two', category: 'Retail', start: 1992,
                   end: 2008 },
                 { name: 'Company Four',
                   category: 'Retail',
                   start: 1989,
                   end: 2010 },
                 { name: 'Company Nine',
                   category: 'Retail',
                   start: 1981,
                   end: 1989 } ]

                   */
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


              ========= How it looks in code-------
                              let smallNum = [2,4,6,8,10]

                                let reducer =  smallNum.reduce(function(accumulator, value, index,array) {
                                  return accumulator += value
                                  },0)
                                
                                console.log(reducer)

              =====================

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
                
                console.log(reduceAge)

                // Get Total Years for Each companys. 
                   const totalYears = companies.reduce(function (accumulator, company, index) {
                
                return accumulator += company.end - company.start
                
              },0)

              // console.log(totalYears) => 118

              //
              const reduceCompYear =(arr) =>{
  
                arr.reduce(function(accumulator, currentValue){
                 // console.log(currentValue.start)
              return accumulator +=  currentValue.end } 
              
              ),0}
             
console.log(reduceCompYear(companies))

  //------------end of reduce---------------

  



// ------------ End of Higher Order Function ---------------------





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

   /* ============  Another way of sampling this. 
    let smallNum = [50,2,10024,6,8,10]

  let orderNum = smallNum.sort((a,b)=> {
    return a - b
    } )
  
  console.log(orderNum)
  
   
   =================*/

  //-------------------End of SORT----------------

 //console.log(companies)

  // for (let i = 0; i < companies.length; i++) {
  //   const element = companies[i];
  //   console.log(companies)
    
  // }


// ------------------------ForEach----------------
  /*
  let string = ["ánd", "like", "word" ]

let eachWord = string.forEach(function(item, index){
  console.log(item)
  }, 0)
  
  console.log(eachWord)   =>
   ánd
like
word
undefined
  
  */


// companies.forEach(function (company, index, companies) {
//   // Can take up to 3 Argment.  
    
//   console.log(company.name,  company.start, "-", company.end, index )
//     /*  => Company Two 1992 - 2008  1   . . .   For each company in our array 
//            Company three 1999 - 2007  2   . . . 
//      */
// })
      
//--------------- End Of ForEach--------------------



// ------------- Other Methods --------------



let teams = { name: "alex", color: "red", city: "NewYork" }
let arr = [3, 2, 3, 4, 6]
//array.foo = 'Test Hello'
  
//----------------------for..in    ...... Work OBJECTS. ("in" --- work with "string")
  let emptyString = ''
    
  for (const key in teams) {
      emptyString = teams[key]
    
    console.log(emptyString)

  }

  // ----------------for...of-----------------Works with Numbers Array---------------
const helperFunc = (arr) => {
  let emptyNum = 0
  for (const i of arr) {
    emptyNum += i   // emptyNum = emptyNum + 1
  }
  return emptyNum
}

// console.log(helperFunc(arr))   // => 18


  //------------------...spread----------------------------
 let firstArrayBall = ["jumpBall", "Football", 'BaseBall ']
let secondArrayThings = ['card', 'office', 'spon']
let numArray = [3, 4, 2, 1]
 
 // USed for  Add element of exisiting array into another array... Works with strings and digits
    let thirdArray = ['card', 'office', ...firstArrayBall, 'spon']
 // console.log(thirdArray)   //=> [ 'card', 'office', 'jumpBall', 'Football', 'BaseBall ', 'spon' ]


//------ pass element of an array as arguments
  // Only add up to what is allowed in the arrguments. 
const add2 = (x, y, a) => {  //console.log( x + y + a) 
 }   // => 9
       add2(...numArray)
  


//------------ concatenate arrays
  let concatArr = [...firstArrayBall, ...secondArrayThings]
//console.log(concatArr)
  // => [ 'jumpBall', 'Football', 'BaseBall ', 'card', 'office', 'spon' ]

//---- copy array  into another values.
let copiedArr = [...firstArrayBall]
   // console.log(copiedArr)    //=>  [ 'jumpBall', 'Football', 'BaseBall ' ] 
  //-------------- End of Spread -------------------



  //--------------- ... rest operator-----------------, 
     // Does not work with strings.
const firstMutiply = (arg1, ...agr2) => {
    // Note .. arg1 - 1st numb in the Array  (2),  ..Rest is in Arg2 (1,2,3)
  console.log(arg1)
  return agr2.map(function(element){return arg1 * element})
}
 let testArr = firstMutiply(5,1,"strings",2,3, )
console.log(testArr)    //=> [ 2, NaN, 4, 6 ]

//---------------


//  Combine the total End year of each company. 
 // Using Map
const useRest = (arr1, ...arr2) => {
   
  return arr2.map(function(element, index, array){
     //  console.log(element)
       //console.log(index)
      //console.log(array)
     (arr1 + element)
  })
  
       }
       
       
 console.log(useRest(4,"ju7mp",3,2,4))  //=>4Jump768



  // --------------End of Rest Opereator-----------------


  //-------------slice-------------..
   // Works mostly with arrays, 
   
  let DummyTeams = ['WAter', 'earth', 'wind' ]
let DummyArr = [3, 2, 3, 4, 6]


const sliceTeam = DummyTeams.slice(0, 3)
 
//console.log(sliceTeam)  //=> [ 'WAter', 'earth', 'wind' ] 
  
const sliceArr = DummyArr.slice(1,4)
////console.log(sliceArr)   // => [ 2, 3, 4 ]


  // -------- End of Combined Methods--------------------


  //Javascript function are OBJECT cus we can give it property ... such as .lang
// const greeting = () => { console.log('world') }

// greeting.lang = 'English'
// console.log(greeting.lang )


const some = [ "alex",  "red", "NewYork" , "ass"]
 let num = [2,1,3,4,5]
const checkSlice = (arr) => { return arr.slice(3, 4) }
 
// console.log(checkSlice(some))

for (const cons of object) {
  
}