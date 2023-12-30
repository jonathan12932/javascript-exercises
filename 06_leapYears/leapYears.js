const leapYears = function(year) {

    if(!Number.isInteger(year))
        return "ERROR";

    if(year % 400 == 0)
        return true;

    if(year % 100 == 0 || year % 4 != 0)
        return false;

    return true;
};

// Do not edit below this line
module.exports = leapYears;
