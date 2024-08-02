// Tutorial on arrays in JavaScript

const myArray = [];

myArray[0] = 1;
myArray[1] = "Ozioma";
myArray[2] = true;
myArray[3] = 3.14;
myArray.push("Come again");

myArray.unshift(345);
console.log(myArray);

// const lastItem = myArray.pop();
// console.log(lastItem);

myArray.splice(1, 3, 4, 67, 87);
console.log(myArray)

// myArray.append("Amarachi")
// what does the pop function do to an array?
// it removes the last element of the array
// what if you specify an index to the pop function?
// it removes the element at the specified index
// like what we have in line 9?
// yes
// console.log(myArray);
// console.log(myArray.length)

// an array of letters
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const newArray = letters.slice(0, 7)
console.log(newArray);

console.log(letters.reverse());

const newString = letters.join('');
console.log(newString);

const newString2 = letters.join('-');
console.log(newString2);

const newString3 = letters.join('');
console.log(newString3);

const newString4 = newString3.split('');
console.log(newString4);

const newArray2 = newString4.concat(newString3)
console.log(newArray2);

const newArray3 = [...letters, ...newArray2]
console.log(newArray3)


// how to pick items from nested arrays
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const firstItem = nestedArray[0][0];
console.log(firstItem); // Output: 1

const secondItem = nestedArray[1][1];
console.log(secondItem); // Output: 5

const thirdItem = nestedArray[2][2];
console.log(thirdItem); // Output: 9



