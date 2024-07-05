const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');

// Custom class 
class ZipCodeEmitter extends EventEmitter {

	// member functions

	lookupByZipCode(zip) {
		// print info
		console.log(`Look up by zip code (${zip})`);
		// create result obejct and print
		const result = data.find(item => item._id === zip);
		// console.log('Event lookupByZipCode raised!', result);
		this.emit('lookupByZipCode', result);
	}

	lookupByCityState(city, state) {
		// print info
		console.log(`Look up by city (${city}, ${state})`);
		const result = data.filter(i => i.city === city && i.state === state).map(i => i);
		this.emit('lookupByCityState', result);
	}

	getPopulationByState(state) {
		// print info
		console.log(`Get population by state (${state})`);
		// get total pop by state
		const totalPop = data.reduce((pop, item) => {
			if (item.state === state) {
				return pop + item.pop;
			}
			return pop;
		}, 0);
		// create the result obejct for return
		const result = {
			'state': state,
			'pop': totalPop
		};
		this.emit('getPopulationByState', result);
	}

}

module.exports.ZipCodeEmitter = ZipCodeEmitter;

