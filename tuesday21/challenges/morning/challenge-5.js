/* 
CHALLENGE 5
Change contents of the isNumber function
using ternary operator.
*/

"use strict";

function isNumber(a) {(typeof a === "number") ? console.log("That's number") : console.log("That's not a number");}

console.log(isNumber(10));
// That's number
console.log(isNumber("Hey there"));
// That's not a number
console.log(isNumber(true));
// That's not a number
