//find method

let a = [10,20,30,40,50];
let res = a.find(myfunction);
console.log(res); // return value

function myfunction(value,index,array){
	return value>20
}