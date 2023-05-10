const net = require("net");
const { IP, PORT, PLAYER, ENCODER } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODER);

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write(`Name: ${PLAYER}`);
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = { connect };

// Move commands
// "Move: up" (unless facing down)
// "Move: down" (unless facing up)
// "Move: left"(unless facing right)
// "Move: right" (unless facing left)