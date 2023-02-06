const helpers = require('./helpers');

const fireEvents = () => {
    console.log("In fireEvents");
    console.log('Fire event 1');
    helpers.fireEvent(helpers.EVENT_NAME, {"name": "Ahmed Helal"});
    console.log("=========================");
    console.log('Fire event 2');
    helpers.fireEvent(helpers.EVENT_NAME, {"name": "new customer"});
}


module.exports = {
    fireEvents
}