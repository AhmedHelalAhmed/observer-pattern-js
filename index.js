const events = require("./events");
const listeners = require("./listeners");

// step1
listeners.registerListeners();
// step2
events.fireEvents();
