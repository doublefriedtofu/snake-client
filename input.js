

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function(key) {
  if (key === 'w') {
    console.log("this key was presed");
  }
  if (key === '\u0003' || key === "x") {
    process.exit();
  }
};

module.exports = {
  setupInput,
};