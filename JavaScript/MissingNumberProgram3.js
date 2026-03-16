//Q3. Write a java program to find missing elements in an array.
let a = [1,2,3,5,6];
let n = a.length + 1;

let expsum = n * (n+1)/2;
let actualsum=0;

for(let i=0; i<a.length; i++){

	actualsum+=a[i];
	
}
let missNum = expsum - actualsum;
console.log("Missing Number : " + missNum);