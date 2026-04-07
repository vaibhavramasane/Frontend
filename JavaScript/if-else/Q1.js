// js code 
/*1. Positive, Negative, or Zero 
Logic: 
Check if number > 0, < 0, or equal to 0. 
Example: 
Input: -5 
Output: Negative number  */
let num = Number(prompt("Enter a number:"));

if (isNaN(num)) {
  console.log("Invalid input");
	} else if (num > 0) {
		console.log("Positive Number");
	} else if (num < 0) {
		console.log("Negative Number");
	} else {
		console.log("Zero");
	
}