const sumAll = function(numOne, numTwo) {

    let toReturn = 0;

    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0)
        return "ERROR";
    else if(numTwo < numOne) {

        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }

    for(let x = numOne; x <= numTwo; x++) {

        toReturn += x;
    }

    return toReturn;
};

// Do not edit below this line
module.exports = sumAll;
