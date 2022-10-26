let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function(key) {
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }  
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === '\u0003' || key === "x") {
    process.exit();
  }
  if (key === "p") {
    connection.write("Say: whatever message");
  }
};




module.exports = {
  setupInput,
};