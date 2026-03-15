//map() function

let a = [10,20,40,50,60];

let b = a.map(myfun);

console.log("Original Array : " + a);
console.log("new Array : "  + b);

function myfun(value,index,a){

	return value * 2;
	
}
	