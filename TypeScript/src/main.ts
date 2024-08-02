

// TYpe Aliases
type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active?: boolean,
  album: stringOrNumberArray
}

let tc: Guitarist = {
  name: 'TEECEE',
  active: true,
  album: ['huwf', 16536, 'jiuq']
}


// Literal types
// tHIS IS NOT A VARIABLE, THIS IS A DATATYPE CALLED myName
let myName: 'Dave'
myName = 'Dave'

// THIS DATAtype called username
let userName: 'John' | 'Dave' | 'TC'

//
userName = 'Dave'
userName = 'John'
userName = 'TC'

// Functions
const add = (a:number  ,  b:number): number => {
  return a + b
}

const logMsg = (message: any): void => {
    console.log(message) 
}

logMsg('Hello')
console.log(add(2,5))
logMsg(add(43,67))


let subtract = function(c:number, d:number): number {
    return c - d
    
}

type mathFunction = (a:number, b:number)=> number
let multipy: mathFunction = function(c,d) {
  return c * d
}

//optioal values

const addAll = (a: number, b:number, c?:number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  } 
  return a + b 
}

const sumAll = (a: number, b:number, c:number = 2): number => {
  return a + b + c 
}

logMsg(addAll(2,3,5))
logMsg(addAll(2,3))

logMsg(sumAll(2,3,5))
logMsg(sumAll(2,3))

console.log('hello world')

