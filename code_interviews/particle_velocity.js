
/* This task is very simple. We just need go through the given array and 
check that the difference between three simultaneous items is equal.
 For example in array 1, 2, 3 the difference between 1 and 2 and between
  2 and 3 is 1. That is in term of the task the movement of the particle 
  was stable. Each time when they are equal we increase the counter of the periods of time
   when the movement is stable and add it into a counter of all periods.
    We need two counters in order to count periods which include other 
    periods. Pay attention of the note in the task description “Note that some periods of time might be contained in others”.
     Also pay attention that we pass through the array only once. Despite the fact that we have two nested arrays we use only one iterator “i”. So
      complexity of the task is O(N).

      Resources https://molchevskyi.medium.com/best-solutions-for-microsoft-interview-tasks-particle-velocity-525714c85a9

*/
// ---> Code working----

function solution(array) {
    let total_period = 0, array_size =array.length
    for (let i = 0; i < array_size; i++){   
        for (let count = 0; i + 2 < array_size && array[i + 1] - array[i] == array[i + 2] - array[i + 1]; ++i){
            total_period += ++count;
        }
            
        
    }
    return total_period < 1000000000 ? total_period : -1
}

let test1 = [0, 3, 2, 1, 2, 4, 0]
test2 = [1,2,3,4]
console.log(solution(test2))