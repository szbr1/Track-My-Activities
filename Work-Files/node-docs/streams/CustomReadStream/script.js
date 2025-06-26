const fs = require("fs");
const {Readable } = require("stream");


class MyRead extends Readable{
  constructor(filename, watermark){
    
    super({highWaterMark: watermark})
    this.filename = filename;
    this.fd = null;

  }

  _construct(callback){
    fs.open(this.filename, "r", (err, fd)=>{
        if(err) callback(err);
        this.fd = fd;
        callback()

    })


  }

  _read(size){
   const buff = Buffer.alloc(size)
   fs.read(this.fd, buff, 0, size, null,(err , bytesRead)=>{
    if(err) this.destroy(err);
    this.push(bytesRead > 0 ? buff.subarray(0, bytesRead): null)
   })
  }

  _destroy(error, callback){
    if(this.fd){
        fs.close(this.fd, (err)=>{
            if(err) callback(err|| error)
        })
    callback()
    }
  }
  
}

(()=>{

    
    const MyReadStream = new MyRead("cmd.txt", 50 * 1024)
    
    MyReadStream.on("data", (chunk) => {
        console.log(chunk.length);
        console.log(chunk.toString("utf-8"));
    });
    
    MyReadStream.on("end", () => {
        console.log("Stream is done reading.");
    });
})()