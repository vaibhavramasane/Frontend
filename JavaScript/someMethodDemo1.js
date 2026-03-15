// some 

let a = [-10,-40,-50,-60,-90];

let res = a.some(myfun);

if(res){

	console.log("Array contains some positive elements " );
	
}else{

	console.log("Arrays contains all negative elements: ");
	
}

function myfun(value,index,array){

	return value>0;
	
}
	