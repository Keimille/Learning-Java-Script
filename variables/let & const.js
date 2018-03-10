//Examples of variables

//Variables allow us to assign data to a word and use the word to reference the data

//declare variables withl let const. const is short for constant

const entree = 'Fried Chicken';
const price = 12;
console.log(entree);
console.log(price);
//output: Fried Chicken
//output: 12

//you can not assign to a constant a different variable
//see example
const entree = 'Fried Chicken';
const price = 12;
console.log(entree);
console.log(price);
entree = 'Watermelon';
//output: TypeError: Assignment to constant variable

//let variables can be reassigned 
let changeMe = true;
changeMe = false;
console.log(changeMe);
//output: false

//an undefined variable is automatically set to undefined
//example
let Giancarlo; 
