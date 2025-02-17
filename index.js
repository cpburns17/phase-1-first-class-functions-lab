// Code your solution in this file!

// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0,2);
// }

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = function(drivers) {
        return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    }
}
const fareDoubler = function(fare) {
    return fare * 2;
}
const fareTripler = function(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, functions) {
    return functions(arrayOfDrivers);

}