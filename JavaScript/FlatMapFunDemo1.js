// flatMap 

let a = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Before Flat Map : " + a);

let b = a.flat().flatMap((value)=> value*2);
console.log("After Flat Map : " + b);