const cities = require('./zipCodeModule_v1');
const colors = require('colors');

// Lookup by zip code: 02215, and print the results.
cities.lookupByZipCode('02215');
console.log(); // add a new line

// Lookup by zip code: 99999, and print the results.
cities.lookupByZipCode('99999');
console.log(); // add a new line

// Lookup by city, state: BOSTON, MA, and print the results.
cities.lookupByCityState('BOSTON', 'MA');
console.log(); // add a new line

// Lookup by city, state: BOSTON, TX, and print the results.
cities.lookupByCityState('BOSTON', 'TX');
console.log(); // add a new line

// Lookup by city, state: BOSTON, AK, and print the results.
cities.lookupByCityState('BOSTON', 'AK');
console.log(); // add a new line

// Get population by state: MA, and print the results.
cities.getPopulationByState('MA');
console.log(); // add a new line

// Get population by state: TX, and print the results.
cities.getPopulationByState('TX');
console.log(); // add a new line

// Get population by state: AA, and print the results
cities.getPopulationByState('AA');
console.log(); // add a new line