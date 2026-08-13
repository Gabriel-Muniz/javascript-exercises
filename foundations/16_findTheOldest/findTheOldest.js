const findTheOldest = function (peopleArray) {
    const oldestPerson = peopleArray.reduce((oldest, currentPerson) => {
        oldest.yearOfDeath ??= new Date().getFullYear();
        let auxOldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let auxCurrentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return (auxOldestAge > auxCurrentAge) ? oldest : currentPerson;
    }, peopleArray[0])

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
