//functions in TypeScript

const sayHello = () => {
  console.log('hello');
};

sayHello();

// ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'hello');
//   return word || 'hello';
// };

// sayWord();

//default params
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('Cam', 'Scott');

//Implicit types

// Union types with |
let newName: string | number = 'Cam';
newName = 'Scott';
newName = 10;
console.log(newName);

//Infiring types from another variable
//Gets type infornmation from initialization
let newNameTwo = newName;
newNameTwo = 10;

//Union types with functions
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
};
makeMargin(10);
makeMargin('Scott');
// makeMargin(false);

//Null types
//Can be string or undefined or null
let dog: string = 'Sammy';
dog = null;
dog = 'Lucie';
//strict null check
