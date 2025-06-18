const { Writable } = require("node:stream");
const fs = require("node:fs");



class CustomStream extends Writable {




  constructor(filename, watermarklenghth){
          
      super({highWaterMark:watermarklenghth})

      this.filename = filename
      this.fd = null
      this.chunks = []
      this.chunksSize = 0
  }


  _construct(callback){
    fs.open(this.filename, "w", (err,fd)=>{
        if(err){
            callback(err)
        }else{
            this.fd = fd 
            callback()
        }
    })
  }

  

  _write(chunk,encoding,callback){
        this.chunks.push(chunk)
        this.chunksSize += chunk.length

        if(this.chunksSize > this.writableHighWaterMark){
            fs.write(this.fd, Buffer.concat(this.chunks) , (err)=>{
                callback(err)
            })

            this.chunks = [];
            this.chunksSize = 0;
       }else{
        callback()
       }
        }

    _final(callback){
        if(this.chunksSize === 0) return callback()
         fs.write(this.fd, Buffer.concat(this.chunks), (err)=>{
          callback(err)
         })
         this.chunks = []
         this.chunksSize = 0

    }

    _destroy(error, callback) {
        if (this.fd) {
            fs.close(this.fd, (err) => {
                callback(err || error)
            })
            this.fd = null
        } else {
            callback(error)
        }
    }
     

}

(async()=>{

    const myPersonalStream  = new CustomStream("text.txt", 16 * 1024)

    let color = 0
    
    const manyFun = ()=>{

        while (color < 10000) {
            
            const buffer =  Buffer.from(`${color} `, "utf-8")

            if (color === 10000 - 1) {
                return myPersonalStream.end(buffer);
              }
            
            if(!myPersonalStream.write(buffer))break;
            
            color++
        }   
    }
 manyFun()

    myPersonalStream.on('drain', ()=>{
        manyFun()

    })

   

})()
