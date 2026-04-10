/*18. Count Digits 
Logic: 
Divide number by 10 repeatedly and count steps. 
Example: 
Input: 1234 
Output: 4 digits  */
let n = 1234;
let count = 0;

while (n != 0) {
    n = Math.floor(n / 10);
    count++;
}

console.log(count);