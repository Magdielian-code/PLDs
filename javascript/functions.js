// functions
// function declaration

function myFunction() {
    console.log("Hello World");
}
myFunction();

function sum(a,b) {
    console.log(a+b);
} 
sum(4,5);
function getEmail(emailAdd) {
    return emailAdd.slice(emailAdd.indexOf('@'))
}
// BMI Calculator

// const mass = mass.toInteger(prompt("Enter Your body mass"));
// const height = height.toInteger(prompt("Enter your height"));

// function bmi(mass, height) {
//     return mass / (height * height);
// }
// console.log(bmi(mass, height));

// example of anonymous function
const theFunction = function() {
    console.log("Hello World");
}
theFunction();

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

const toProperCase = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toProperCase("jOhn")); // Outputs: John

const toCorrectCase = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toCorrectCase("oZIoMA"));
