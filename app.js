let helloWord = "helloWoeafdsfrd"

console.log(helloWord)

// Testing out insertion sort. // Revist

let num = [8,4,2,1]

const insertSort = (arr) =>{
    

     for(let i = 1; i < arr.length; i++){

    let temp = arr[i]
    let position = i - 1 // last element of our unsorted array

        while((position >- 1) && (temp < arr[position])){
            arr[position + 1] = arr[position]
            //  What Does Position  -- Do for us
            position --
        }
       arr[position + 1] = temp
     }
     return arr

}
insertSort(num)