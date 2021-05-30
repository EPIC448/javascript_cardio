  // I want to make values in an array a key in an object and Print it out.  
  // Working as expected. 
let valueAge = [5, 3, 2, 34, 5, 6]
  let keysOfName = ["steve", "lisa", "mike", "jonny", "mike2", "andre"]
  let obj = {}
  
  for (let i = 0; i < keysOfName.length; i++){
    obj[keysOfName[i]] = valueAge[i];
    }
    
    for (let key of Object.keys(obj)){
      console.log( key + ": " + obj[key] )
    }
    /*
    console.log(obj) => 
     { steve: 5, lisa: 3, mike: 2, jonny: 34, mike2: 5, andre: 6 }
    
     console.log( key + ": " + obj[key] )
    => 
     steve: 5
     lisa: 3
      mike: 2
      jonny: 34
      mike2: 5
      andre: 6
 
    */