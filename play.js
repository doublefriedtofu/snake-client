const { net, connect } = require("./client.js");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function (key) {
  if (key === '\u0003' || key === "x") {
    process.exit();
  }
}

connect()
setupInput()