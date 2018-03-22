//example of parameters
const takeOrder = (topping) => {
  console.log('Order: pizza topped with ' + topping);
};

takeOrder('mushrooms');
//output: Order: pizza topped with mushrooms

//example of multiple parameters
//seperate paramaters with a comma

const takeOrder = (crustType, topping) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('thin crust','bacon');
//output: Order: thin crust pizza topped with bacon
