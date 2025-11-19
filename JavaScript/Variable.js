const accountId = 34567
let accountEmail = "vaibhav@google.com"
var accountPassword = "143143"
accountCity = "Nanded"
let accountState;

// accountId = 2 // not allowed


accountEmail = "reddy@gmail.com"
accountPassword = "243143"
accountCity = "Latur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])