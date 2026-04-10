/* Q6. Check Some Negative
Problem: Check if some numbers in
 [1,-2,3] are negative using .some().
 */
 
let nums = [1,2,3,4,5,6,-9];

let neg = nums.some(nums=> nums<0);

console.log(neg);