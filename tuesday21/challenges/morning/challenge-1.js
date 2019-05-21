//Use ES6 whenever possible.

/*
CHALLENGE 1
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
Use console.log() at the end of the sum() function to print result.
*/

function sum() {
    let answer = 0;
    for (let value of arguments) {
        answer += value;
    }
    console.log(answer);
}

sum(22,2,3,4,5,6,7,8,9, 600);