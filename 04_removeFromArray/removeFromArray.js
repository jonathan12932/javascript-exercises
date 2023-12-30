const removeFromArray = function(array, ...args) {

    let toReturn = [];

    array.forEach(element => {

        if(!args.includes(element)) {

            toReturn.push(element);
        }
    });
    
    return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
