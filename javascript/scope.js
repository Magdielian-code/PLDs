// global scope
var x = 1;
let y = 1;
const z = 1;

/* 
    local scope: they are only accessible within the function
    they are of two types:
    1. function scope
    2. block scope

    what are function scope?
    - they are variables declared and accessible within a function
    - they are not accessible outside the function
    - they are not accessible in other functions
    - they are not accessible in other blocks
    
    HOw about block scope?
    - they are variables declared within a block
    - they are only accessible within the block

*/

console.log(y)
function myFunction() {
    console.log(y)
}
myFunction();

// a global vaiable can be caled from a function but a local variable cannot be called from outside the function
//  using previous example

function thisFunction() {
    const y = 67
    console.log(y)
}
thisFunction();