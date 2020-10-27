
//https://www.youtube.com/watch?v=rRgD1yVwIvE

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

 //onsole.log(companies)

  // for (let i = 0; i < companies.length; i++) {
  //   const element = companies[i];
  //   console.log(companies)
    
  // }


// ---------    ForEach

// companies.forEach(function (company, index, companies) {
//   // Can take up to 3 Argment.  
    
//   console.log(company.name,  company.start, "-", company.end, index )
//     /*  => Company Two 1992 - 2008  1   . . .   For each company in our array 
//            Company three 1999 - 2007  2   . . . 
//      */
// })
      
let age = [33, 12, 20, 16,100, 5, 54, 21, 44, 61];

    // --------filter----- GET 21 AN OLDER

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

const retailComp = companies.filter(function (company) {
  // console.log(company.category)
   if(company.category === "Retail") return company
})
   console.log(retailComp)

//............ End of Filter........

  //map
  //sort
  //reduce
  //for..in
  //spread
  

  //splice..
  // ..