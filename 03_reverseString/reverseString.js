const reverseString = function(toReverse) {

    let toReturn = "";

    for(let x = toReverse.length - 1; x >= 0; x--) {

        toReturn += toReverse.charAt(x);
    }

    return toReturn;
};

// Do not edit below this line
module.exports = reverseString;
