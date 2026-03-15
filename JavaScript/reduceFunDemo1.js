// reduce() 

let a = [10,20,30,40,50,050];

let sum = a.reduce(myfun,0);

console.log("Sum of all values: " + sum);
function myfun(total,value){

	return total + value;
	
}