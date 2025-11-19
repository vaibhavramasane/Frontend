//

const name = "Vaibhav"
const repocount = 50

//console.log(name + per + " first distinction");
console.log(`My name is ${name} and my repo count is ${repocount}`);

const gameName = new String('vaibhav-hc-com');

console.log(gameName[0]); // v
console.log(gameName.__proto__); //{}

console.log(gameName.length);  //14
console.log(gameName.toUpperCase()); //VAIBHAV-HC-COM
console.log(gameName.charAt(5)); //a
console.log(gameName.indexOf("a")); //1

const newString = gameName.substring(0, 4)
console.log(newString); // vaib

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   vaibhav    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vaibhav.com/vaibhav%20Reddy"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));