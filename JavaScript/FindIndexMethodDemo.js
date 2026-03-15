//findIndex method

let a = [10,20,30,40,50];
let res = a.findIndex(myfunction);
console.log(res); // return index

function myfunction(value,index,array){
	return value>20
}