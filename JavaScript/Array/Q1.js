/*Q1. Sum of Array 
Problem: Find sum of numbers in array [1, 2, 3, 4, 5] using .reduce(). */

let nums = [1,2,3,4,5];
let sum = nums.reduce((acc,curr) => acc + curr,0);
console.log(sum);