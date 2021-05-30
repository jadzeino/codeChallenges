/*
  You are given N counters, initially set to 0, and you have two possible operations on them:
  
  • increase(X) − counter X is increased by 1,
  • max counter − all counters are set to the maximum value of any counter.
  
  A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:
  
  • if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
  • if A[K] = N + 1 then operation K is max counter.
  
  Write a function  that, given an integer N and a non-empty zero-indexed array A consisting of M integers, 
  returns a sequence of integers representing the values of the counters.
*/

//100% solution
function solution(N, A) {
let counters = Array(N).fill(0);
let maxCounter = 0;
let maxToSet = 0;
for (number of A) {
	if (number === N + 1)
		{ 
    maxToSet = maxCounter;
    }
  else
  {
  const index = number - 1;
  counters[index] = Math.max(counters[index] + 1, maxToSet + 1);
  maxCounter = Math.max(counters[index], maxCounter);
  }
 } 
counters = counters.map(value => Math.max(value, maxToSet));
return counters;
}
//console.log(solution(5,[3,4,4,6,1,4,4]))




function solution_B(N,A){
  //create the counters array and set it by defualt to 0  
 let counters = new Array(N).fill(0)
 console.log("counters ",counters)
 console.log("A ",A)
 //define max value for the counter, this will chnge based on the  operation and index
 let max=0
 //loop through the array, check the value,based on this change the max and the counter
 for(var i =0 ; i<A.length;i++){
     //check if the value bigger than N
     if(A[i] === N+1){
         //set all counters to the max value
         counters.fill(max)
     }else{
         //define index, the current value -1
         const index=A[i]-1
         //add counter of this index by 1 . the increament operation 
         counters[index]++
         //re set the max value if the counter[index] is bigger than max
         if (counters[index] > max) max = counters[index]         
     }
 }
 return  counters
}
