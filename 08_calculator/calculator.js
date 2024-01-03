const add = function(numOne, numTwo) {
  
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  
  return numOne - numTwo;
};


const sum = function(array) {
	
    return array.reduce((total, current) => current + total, 0);
};

const multiply = function(array) {

  return array.reduce((total, current) => current * total, 1);
};

const power = function(numOne, numTwo) {
	
  return numOne ** numTwo;
};

const factorial = function(numOne) {
	
  if(numOne === 0) 
    return 1;
  
  let toReturn = 1;

  for(let x = 2; x <= numOne; x++) {

    toReturn *= x;
  }

  return toReturn;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
