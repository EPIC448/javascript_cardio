

const onlyEven = array => {
    // put your solution here
    let oddBucket = []
    let evenBucket = []
    
    array.forEach((num => (num % 2 === 0) ? (evenBucket.push(num)) : (oddBucket.push(num))))
    return evenBucket
};

module.exports = {
 // names of the created functions here.
    onlyEven, 

}