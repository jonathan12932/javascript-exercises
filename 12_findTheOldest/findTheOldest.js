const findTheOldest = function(people) {

    let longestAge = -1;
    let toReturn;

    people.forEach(element => {

        if(element.yearOfDeath == undefined) {
            if(2024 - element.yearOfBirth > longestAge) {
                longestAge = 2024 - element.yearOfBirth;
                toReturn = element;
             }

        } else if(element.yearOfDeath - element.yearOfBirth > longestAge) {

            longestAge = element.yearOfDeath - element.yearOfBirth;
            toReturn = element;
        }
    });

    return toReturn;
};
const people = [
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
