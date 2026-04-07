/* 4. Leap Year 
Logic: 
 Divisible by 4 AND not by 100  
 OR divisible by 400  
Example: 
Input: 2024 
Output: Leap Year 
*/

let a = 2024;
if(a % 4==0 && a%100!=0 || a % 400 ==0){

	console.log("Leap Year");
}else{
	console.log("Not Leap Year");
	
}
	