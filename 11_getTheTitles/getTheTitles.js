const getTheTitles = function(books) {

    let toReturn = [];

    books.forEach(element => {

        toReturn.push(element.title);
    });

    return toReturn;
};

// Do not edit below this line
module.exports = getTheTitles;
