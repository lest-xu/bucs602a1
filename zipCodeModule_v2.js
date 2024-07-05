const data = require('./zips.json');

module.exports.lookupByZipCode = (zip) => {
    // print info
    console.log(`Look up by zip code (${zip})`);
    // create result obejct
    const result = data.find(item => item._id === zip);
    // print result and return
    console.log(result);
    return result;
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
    // print info
    console.log(`Get population by state (${state})`);
    // create the result obejct for return
    let result = {
        'state': state,
        'pop': 0
    }
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.state === state) {
            // found, adds up to pop data
            result.pop += item.pop;
        }
    }
    // print the result and return
    console.log(result);
    return result;
};

