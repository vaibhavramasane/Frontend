/*27. Inverted Triangle 
Logic: 
Decrease stars per row. 
Example: 
**** 
*** 
** 
*

*/

let n = 4; // number of rows

for (let i = n; i >= 1; i--) {
	
    let row = "";
	
    for (let j = 1; j <= i; j++) {
		
        row += "*";
		
    }
    console.log(row);
}

