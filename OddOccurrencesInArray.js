/*
Find value that occurs in odd number of elements.
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
  
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
  
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

function solution_1(A) {    
    let mapper =new Map()
    A.forEach(item=>{
        if(mapper.get(item)){
            const value = mapper.get(item)
            mapper.set(item,value+1)
        }else{
            mapper.set(item,1)
        }
    })    
    const [single,_occurance] =[...mapper].find(([key,value])=>(value%2 !=0))    
    return single
}

function solution_2(A) {
let result = 0;
for (let element of A) {
    result ^= element
}
return result
}
//console.log("solution  ",solution([1,5,1,6,6,5,7,9,3,9,3]))


function solution_3(A) {    
    const array = A;
    const sortedArray = array.sort();

    let oddElement;
    
    for(let elementIndex = 0; elementIndex < sortedArray.length; elementIndex++) {
        const thisElement = sortedArray[elementIndex];
        const elementAhead = sortedArray[elementIndex + 1]
        
        if(thisElement === elementAhead) {
            // if it's the same value skip the next element.
            elementIndex++;
        } else {
            oddElement = thisElement;
        }
    }
    return oddElement;
}
