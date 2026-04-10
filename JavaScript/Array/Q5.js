/*Q5. Check All Positive 
Problem: Check if all numbers in [1,2,3] are positive using .every().*/

let nums = [0,1,-1,2,3,4,5,6];
let pos = nums.every(n=>n>0);
console.log(pos);