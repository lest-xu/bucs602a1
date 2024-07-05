const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const cities = new ZipCodeEmitter();

// handler for lookupByZipCode
cities.on('lookupByZipCode', result => {
    console.log('Event lookupByZipCode raised!'.blue, result);
});


// handler1 for lookupByCityState
cities.on('lookupByCityState', result => {
    console.log('Event lookupByCityState raised! (Handler1)'.blue, result);
});

// handler2 for lookupByCityState
cities.on('lookupByCityState', result => {
    console.log('Event lookupByCityState raised! (Handler2)'.blue);
    console.log(`City: ${result[0].city}, State: ${result[0].state}`.blue);
    result.forEach(item => {
        console.log(`  ${item._id} has population of ${item.pop}`.blue);
    });
});

// handler for getPopulationByState
cities.on('getPopulationByState', result => {
    console.log('Event getPopulationByState raised!'.blue, result);
});

// using the ZipCodeEmitter object, do the following operations
cities.lookupByZipCode('02215');
console.log(); // add a new line

cities.lookupByCityState('BOSTON', 'MA');
console.log(); // add a new line

cities.getPopulationByState('MA');