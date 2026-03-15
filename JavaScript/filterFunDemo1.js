// filter 

let a = [1,3,4,5,6,7,10];
let b = a.filter(myfunction);
console.log("Evene Numbers : " + b);

function myfunction(value,index,a){

	return value % 2==0;
	
}