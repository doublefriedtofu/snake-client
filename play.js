const { net, connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log('Connecting ... ');

connect();
setupInput();