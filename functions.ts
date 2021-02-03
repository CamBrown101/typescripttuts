//functions in TypeScript

const sayHello = () => {
  console.log('hello');
};

sayHello();

const sayWord = (word: string): string => {
  console.log(word);
  return word;
};

sayWord('Cam');
