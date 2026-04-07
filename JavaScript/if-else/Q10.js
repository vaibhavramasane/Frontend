/*10. Profit or Loss 
Logic: 
Compare selling price (SP) and cost price (CP). 
Example: 
Input: CP=100, SP=120 
Output: Profit = 20  */
let sp = 120;
let cp = 100;

if (sp > cp) {
    console.log("Profit = " + (sp - cp));
} 
else if (cp > sp) {
    console.log("Loss = " + (cp - sp));
} 
else {
    console.log("No Profit No Loss");
}