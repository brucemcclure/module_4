/* 
CHALLENGE 4
Change code to fix first error after the line 15.
Error after the line 19 should still be generated.
*/

"use strict";

let a = 5;
let b = 10;
let c = 2;

if (b > a) {
    c = a + b + c;
    
    console.log(c);
// BEFORE: Uncaught ReferenceError: c is not defined
// AFTER: 17
}
console.log(c);                                                 // They WANT this error?!
// Uncaught ReferenceError: c is not defined
