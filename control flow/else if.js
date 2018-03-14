//Control Flow

//the following if/else statemnt would print 'Why do you like soccer?'

let isSoccerfan = true;
if (isSoccerfan = true) {
  console.log('Why do you like soccer?');
} else {
  console.log('What kind of person does not like soccer?');
}

//the added if/else prints 'Why do you like soccer?' 'Goal!'

let isSoccerFan = true;
if (isSoccerFan = true) {
  console.log('Why do you like soccer?');
} else {
  console.log('What kind of person does not like soccer?');
}
if (isSoccerFan = true){
  console.log('Goal!');
} else {
  console.log('No goal!');
}

//else if statments and operators
let moonPhase = 'mostly full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
//output: Arms and legs are getting harier
