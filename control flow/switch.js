//To deal with times when you need many else if conditions use a switch statement to write more concise and readable code.

let moonPhase = 'full';

switch (moonPhase){  
  case 'full': 
  	console.log('Howl!');
    	break;
	case 'mostly full': 
  		console.log('Arms and legs are getting hairier');
    	break;
  case 'mostly new':
  console.log('Back on two feet');
			break;
  default:
  console.log('Invalid moon phase');
	break;
}
//output: Howl!

let moonPhase = 'mostly full';

switch (moonPhase){  
  case 'full': 
  	console.log('Howl!');
    	break;
	case 'mostly full': 
  		console.log('Arms and legs are getting hairier');
    	break;
  case 'mostly new':
  console.log('Back on two feet');
			break;
  default:
  console.log('Invalid moon phase');
	break;
}
//output: Arms and legs are getting hairier
