//* this is the static project. it can't handle the back pressure

const readline = require("readline");
const fs = require("fs/promises");

(async () => {
  // readline use for terminal cli
  const ls = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async function ask(path) {
    // question use to show in terminal to get the stdin for stdout
    ls.question(path, (answer) => {
      const files = answer.split(" ");
      const mode = files[0];
      const pathfile = files[1];
      const destination = files[2];

      // checking the file mode * how in terminal it defines: copy rc.mp4 rmc.mp4
      if (mode === "copy") {
        console.log("here is the file ", __dirname + "/" + pathfile);
        fs.copyFile(__dirname + "/" + pathfile, __dirname + "/" + destination);

        ls.write(`Your fie has been copied \n`);
        ask("Provide files to copy: ");
      }
      // it checks the move mode
      if (mode === "move") {
        fs.rename(__dirname + "/" + pathfile, __dirname + "/" + destination);

        ls.write(`Your fie has been copied \n`);
        // i call ask here bcz i want it should be ready for the next file after sending it
        ask("Provide files to copy: ");
      }
    });
  }

  ask("Provide files to copy: ");
})();
