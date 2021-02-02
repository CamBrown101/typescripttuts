const isOpen: boolean = false;
const myName: string = 'Cam';
const myAge: number = 31;

//declaring an array of numbers
const list: number[] = [0, 1, 2];

//Tupal, every time it will be a string an a number
const me: [string, number, boolean] = ['Cam', 31, false];

//enum, like a list, the variable has to be something in the list
enum Job {
  WebDev,
  WebDesigner,
  PM,
}
const job: Job = Job.WebDev;

//any can be anything
const phone: any = 'Pixel';
const tablet: any = 3;

//never
