const { spawn, exec } = require("node:child_process");

// echo "something string" | tr ' ' '\n'

console.log(process.env.mode);
// console.log(process.)


// const subprocess = spawn("echo", ["some string"]);

// subprocess.stdout.on("data", (data) => {
//   console.log(data.toString("utf-8"));
// });

// exec(
//   "echo 'something string' | tr ' ' '\n'",
//   {
//     shell: "/bin/zsh",
//   },
//   (error, stdout, stderr) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     console.log(stdout);

//     console.log(`stderr: ${stderr}`);
//   }
// );
