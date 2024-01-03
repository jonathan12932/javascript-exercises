const fibonacci = function(number) {

    let toReturn = 0;

    if(number < 0)
        return "OOPS";

    if(number == 0)
        return toReturn

    if(number <= 2) {
        
        toReturn = 1;
        return toReturn
    }

    let prevSum = 1;
    let prevSum2 = 1;

    for(let x = 3; x <= number; x++) {


        toReturn = prevSum + prevSum2;
        prevSum2 = prevSum;
        prevSum = toReturn;
    }   

    return toReturn;
};

// Do not edit below this line
module.exports = fibonacci;
