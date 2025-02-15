const findTheOldest = function(arr) {
    arr.sort((a,b) => {
        let age1 = 0
        let age2 = 0
        if (a.yearOfDeath == undefined){
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            age1 = currentYear - a.yearOfBirth;
        }
        else {
            age1 = a.yearOfDeath - a.yearOfBirth
        }
        if (b.yearOfDeath == undefined){
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            age2 = currentYear - b.yearOfBirth;
        }
        else {
            age2 = b.yearOfDeath - b.yearOfBirth
        }
        return (age1>age2) ? -1 : 1
    })
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
