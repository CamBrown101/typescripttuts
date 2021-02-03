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

let newName = 'Cam';
newName = 'Scott';
newName = 10;
