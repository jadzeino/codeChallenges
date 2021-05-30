/*
 MissingInteger
Find the smallest positive integer that does not occur in a given sequence.

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

//100% score
function solution(A) {
     A.sort((a, b) => a - b);
     let min = 1;
     for (number of A) {
        if (number > 0 && number == min) {
             min++;
         }
     }
     return min;
 }


//bad one 
function solution_bad(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length<1){
        return 1
    }
	const sortedArray = A.sort((a,b)=>a-b) 
    if(sortedArray[sortedArray.length-1]<0) return 1       
    let counter=sortedArray[0] 
    let set= new Set(sortedArray)
    for (let item of set) {
        if(counter>0 && item!=counter){
    	return counter
        }
        counter++

    }  
    
    return counter
}
