const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("connect", (data) => {
    console.log("You're connected!")
  });

  conn.on("data", (data) => {
    console.log("It's got a sharp tongue, this server!", data)
  });

  conn.setEncoding("utf8");
  return conn;
}

console.log("Connecting ... ");
connect()