const EventEmitter = require('events');

class SalesEmitter extends EventEmitter {
	constructor() {
		super();
	}
}

const salesEmitter = new SalesEmitter();
const EVENT_NAME = 'newSale';

const listenToEvent = (eventName, callBack) => {
	salesEmitter.on(eventName, callBack);
};
const fireEvent = (eventName, data) => {
	salesEmitter.emit(eventName, data);
};

module.exports = {
	listenToEvent,
	fireEvent,
	EVENT_NAME,
};
