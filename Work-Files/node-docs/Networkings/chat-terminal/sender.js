const net = require("net");
const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const clearLine = (dir)=>{
    return new Promise((resolve,reject)=>{
        process.stdout.clearLine(dir,()=>{
            resolve()
        })
      
    })
}

const onelineUP = (dx,dy)=>{
    return new Promise((res,rej)=>{
        process.stdout.moveCursor(dx , dy ,()=>{
         res()
        })
    })
}

let id;

const socket = net.createConnection(
  { host: "localhost", port: 3999 },
   () => {
  const ask =async ()=>{

      const message = await rl.question("Enter a message > ");

      await onelineUP(0, -1)
      await clearLine(0)
      socket.write(`${id}-message-${message}`);
    }

    ask()

    socket.on("data", async(data) => {
      console.log();
      await onelineUP(0 , -1)
      await clearLine(0)
  
      console.log(data.toString("utf-8"));
      
      if(data.toString("utf-8").substring(0,2) === "id"){
        id = data.toString("utf-8").substring(3)

        console.log(`Your id is : ${id}!\n`)
      }else{
        console.log(data.toString("utf-8"))
      }
    
      
        ask()
    });
   
  }




);



