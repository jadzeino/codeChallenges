/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

//good soultion
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
  
//the sum of all element in the array 
let sumA = A.reduce((a, b) => a + b, 0)
let sumB = 0
let diff = []
for(let i=0; i<A.length-1; i++){
    sumB += A[i]
    sumA -= A[i]
    diff[i] = Math.abs(sumA-sumB)
}
D = diff.sort((a,b)=>a-b,0)
return D[0];
}


//bad solution
function solution_2(A) {
    // write your code in JavaScript (Node.js 8.9.4)    
    const createdTaps=A.map(item=>{
        let tape=Math.abs(countLeft(A,item) - countRight(A,item) )
        return tape 
    })
    const sorted=createdTaps.sort((a,b)=>a-b)
    return sorted[0]
}

const countLeft=(A, index)=>{
    let counter = 0
    for(let i =0;i<index;i++){
            counter+=A[i]
        }

     return counter  
}
const countRight=(A, index)=>{
    let counter = 0
    for(let i =index;i<A.length;i++){
            counter+=A[i]
        }

     return counter  
}
