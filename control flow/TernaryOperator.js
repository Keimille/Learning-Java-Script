// the '?' tests if the the variable is truthy
// the ':' seperates two blocks of code

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

//the ternary form of the code above is as follows
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log ('Incorrect!');
