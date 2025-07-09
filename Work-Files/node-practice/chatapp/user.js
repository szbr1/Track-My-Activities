const net = require("net");
const readline = require("readline");

const ls = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// id banane ke liye ek variable
let userId = Math.floor(Math.random() * 1000); // ya jo bhi logic chaaho

function msg(question) {
  ls.question(question, (answer) => {
    socket.write(`id:${userId} >: ${answer}\n`);
  });
}

const socket = net.createConnection({ host: "localhost", port: 3999 }, () => {
  console.log(`Connected to server as USER ${userId}.`);
  msg(`USER ${userId}: `);
});

socket.on("data", (data) => {
  console.log(data.toString());
  msg(`USER ${userId}: `);
});

socket.on("end", () => {
  console.log("Disconnected from server.");
  ls.close();

