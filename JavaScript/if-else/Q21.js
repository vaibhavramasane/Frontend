/*21. Sum of Digits 
Logic: 
Add each digit of number. 
Example: 
Input: 123 
Output: 6 
*/
let n = 123;
for(let i=0; i<=n; i++){
	let rem = n % 10;
	//rev = rev * 10 + rem;
	n = Math.floor(n/10);
	sum =+ rem;
	

}
console.log(sum);

	
