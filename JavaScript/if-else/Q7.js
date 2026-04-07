/*7. Divisible by 5 and 11 
Logic: 
Check number % 5 == 0 AND number % 11 == 0 
Example: 
Input: 55 
Output: Divisible by both */

let n = 55;
if(n % 5==0 && n % 11 ==0){
	console.log("Divisible by both");
}else{
	console.log("Not divisible by both");
}