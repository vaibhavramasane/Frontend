// Nums
const a = 400;
console.log(a);

const bal = new Number(100);
console.log(bal);


console.log(bal.toString().length);
console.log(bal.toFixed(1));

const b = 123.855;
console.log(b.toPrecision(5));

const c = 1000000;
console.log(c.toLocaleString('en-IN'));


// Math

console.log(Math); // Object [Math] {}

console.log(Math.abs(-10)); // 10
console.log(Math.round(5.6)); // 6

console.log(Math.ceil(5.3)); // 5
console.log(Math.floor(4.7)); // 5
console.log(Math.min(2,3,4,5)); // 2
console.log(Math.max(2,3,4,5)); //5


console.log(Math.random()); // give any random value between 0 and 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ( max - min + 1)) + min); //15 every time it's gives dfiifferent value