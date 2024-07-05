const data = require('./zips.json');

module.exports.lookupByZipCode = (zip) => {
    // make sure zip is provided
    if (zip) {
        // print info
        console.log(`Look up by zip code (${zip})`);
        // loop through the data
        for (let i = 0; i < data.length; i++) {
            // create result obejct
            const item = data[i];
            if (item._id === zip) {
                // found, print the result and return
                console.log(item);
                return item;
            }
        }
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
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.city === city && item.state === state) {
            // found, add to city data
            result.data.push({ 'city': item.city, 'state': item.state });
        }
    }
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

