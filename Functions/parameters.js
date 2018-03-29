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

// this next code took some time to wrap my head around. worth reviewing 

const orderCount = (0);
const takeOrder = (crustType, topping, orderCount) => {
orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
 return (itemCount) * 7.5; 
};
console.log(getSubTotal(orderCount))
//output: 0
