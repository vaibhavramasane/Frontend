/*19. Reverse Number 
Logic: 
Extract digits and rebuild reversed number. 
Example: 
Input: 123 
Output: 321  */

let n = 123;
let rev =0;
let temp = n;
while(n!=0){
	
	let rem = n % 10;
	rev = rev * 10 + rem;
	n = Math.floor(n/10);
	
}
console.log(rev);


	