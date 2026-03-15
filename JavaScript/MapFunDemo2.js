let a = [10,20,30,5,6,7,9,100];
let b = a.map(myfun);

console.log("Original Array : " + a);
console.log("new Array : " + b);

function myfun(value,index,a){

	return value/5;
	
}
	