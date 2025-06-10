// Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array storing both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function: returns a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Create a function to double the fare
const fareDoubler = createFareMultiplier(2);

// Create a function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

