const helpers = require('./helpers');
const registerListeners = () => {
	console.log('In registerListeners');
	helpers.listenToEvent(helpers.EVENT_NAME, () => {
		console.log('In event listener 1');
		console.log('There was a new sale!');
	});
	helpers.listenToEvent(helpers.EVENT_NAME, (data) => {
		console.log('In event listener 2');
		console.log(`Customer name: ${data.name}`);
	});
};

module.exports = {
	registerListeners,
};
