"use strict";
let tc = {
    name: 'TEECEE',
    active: true,
    album: ['huwf', 16536, 'jiuq']
};
// Literal types
// tHIS IS NOT A VARIABLE, THIS IS A DATATYPE CALLED myName
let myName;
myName = 'Dave';
// THIS DATAtype called username
let userName;
//
userName = 'Dave';
userName = 'John';
userName = 'TC';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
console.log(add(2, 5));
logMsg(add(43, 67));
let subtract = function (c, d) {
    return c - d;
};
