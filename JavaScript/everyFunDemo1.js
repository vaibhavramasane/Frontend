// every()

let a = [10,20,-1,40,50,90];

let b = a.every(myfun);

if(b){

	console.log("Array contains all positive numbers");
	
}else{

	console.log("Array contains some negative numbers");
	
}

function myfun(value,index,array){

	return value>0;
	
}