

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