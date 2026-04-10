/*20. Palindrome 
Logic: 
Reverse number and compare with original. 
Example: 
Input: 121 
Output: Palindrome  */


let n = 123;
let rev =0;
let temp = n;
while(n!=0){
	
	let rem = n % 10;
	rev = rev * 10 + rem;
	n = Math.floor(n/10);
	
}
console.log(rev);
if(temp == rev){
	console.log("palindrome");
}
else{
	console.log("palindrome");
}
