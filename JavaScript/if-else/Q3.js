/*3. Largest Among Three Numbers 
Logic: 
Compare all three numbers using conditions. 
Example: 
Input: 5, 9, 3 
Output: Largest is 9  */

let a = 5;
let b = 9;
let c = 3;

if(a>b && a>c){
	console.log("Largest is " + a);
}else if(b>a && b>c){
	console.log("Largest is " + b);
	
}else{
	console.log("Largest is " + c);
}	
