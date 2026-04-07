/*16. Factorial 
Logic: 
Multiply numbers from 1 to N. 
Example: 
Input: 5 
Output: 120 */

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);