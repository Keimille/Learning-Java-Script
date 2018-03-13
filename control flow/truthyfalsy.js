//truthy and falsy values

//all variables have a truthy or falsy value
//all variables a true unless they contain any of the following values
//false, 0 and -0, "" , '' (empty strings), null, undefine,d NaN (Not a Number), document.all

//the exclamation point (!) can be used to swap truthiness and falsiness

let favoritePhrase = true;

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
