const EventEmitter = require("events");
const myEmitter = new EventEmitter();
const EVENT_NAME = "newSale";

const listenToEvent = (eventName, callBack) => {
  myEmitter.on(eventName, callBack);
};
const fireEvent = (eventName, data) => {
  myEmitter.emit(eventName, data);
};

module.exports = {
  listenToEvent,
  fireEvent,
  EVENT_NAME,
};
