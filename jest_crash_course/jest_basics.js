

const onlyEven = array => {
    // put your solution here
    let oddBucket = []
    let evenBucket = []
    
    array.forEach((num => (num % 2 === 0) ? (evenBucket.push(num)) : (oddBucket.push(num))))
    return evenBucket
};


const add = (num1, num2) => {
     return num1 + num2
 }

const isNull = () => null
 
const checkValue = () => false //0

const createUser = () => {
    const user = { firstName: "Brad" }
    user['lastName'] = "Traversy";
return user
}



module.exports = {
 // names of the created functions here.
    onlyEven, add, isNull, checkValue, createUser,

}