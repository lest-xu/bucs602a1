const data = require('./zips.json');

module.exports.lookupByZipCode = (zip) => {
    // make sure zip is provided
    if (zip) {
        // print info
        console.log(`Look up by zip code (${zip})`);
        // create result obejct
        const result = data.find(item => item._id === zip);
        // print result and return
        console.log(result);
        return result;
    }
    // not found, print and return undefined
    console.log(undefined);
    return undefined;
};

module.exports.lookupByCityState = (city, state) => {
    // print info
    console.log(`Look up by city (${city}, ${state})`);
    // create the result obejct for return
    let result = {
        'city': city,
        'state': state,
        'data': []
    }
    // filter by city and state
    const filtered = data.filter(i => i.city === city && i.state === state);
    // assign filtered data to result
    result.data = filtered;

    // print the result and return
    console.log(result);
    return result;
};

module.exports.getPopulationByState = (state) => {

};

