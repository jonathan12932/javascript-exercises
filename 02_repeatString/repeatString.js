const repeatString = function(word, num) {
    
    if(num < 0) 
        return "ERROR";

    let toReturn = "";

    for(let x = 0; x < num; x++) {

        toReturn += word;
    }

    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
