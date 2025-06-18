const fs = require("fs");
const {Duplex} = require("stream");


class MyDuplex extends Duplex{
    
    constructor(writeFileHighWatermark, readFileHighWatermark , writeFileName, readFileName){

        super({
            writableHighWaterMark: writeFileHighWatermark,
            readableHighWaterMark: readFileHighWatermark
        })

        this.writeFile = writeFileName;
        this.readFile = readFileName;
        this.fdWrite = null
        this.fdRead = null
        this.chunks = []
        this.chunkSize = 0

    }

    _construct(callback){
         fs.open(this.readFile, "r", (err,fd)=>{
            if(err) callback(err);

            this.fdRead = fd;
            fs.open(this.writeFile, 'w', (err,fd)=>{
                if(err) callback(err);
                this.fdWrite = fd
                callback()
            })

         })
    }


    _read(size){
    const buff = Buffer.alloc(size)
    
    fs.read(this.fdRead, buff, 0, size, null,(err, bytesRead)=>{
        if(err) this.destroy(err);
        this.push(bytesRead > 0 ? buff.subarray(0, bytesRead): null)
    } )
         
    }


    _write(chunk,encode,callback){
        
        fs.write(this.fdWrite, chunk , (err)=>{

       if(err)callback(err);
       this.chunk = []
       callback()
    })
     
    }

    _final(callback){
     if(this.chunk){
        fs.write(this.fdWrite, this.chunk, (err)=>{
            if(err) callback(err)
            this.chunk = []
        }

        )
     }
    }

    _destroy(error,callback){
        if(this.fdRead || this.fdWrite){
            fs.close(this.fdRead, (err)=>{
                if(err) callback(err)
                    this.fdRead = null
            this.fdWrite = null
                fs.close(this.fdWrite, (err)=>{
            if(err) callback(err)
            this.fdRead = null
            this.fdWrite = null
            callback()
            })
            })
            
        }else callback(error)


    }
    
    
    
}

const duplex = new MyDuplex(15000,30000,"text.txt","cmd.txt")

duplex.on('data',(data)=>{
    console.log(data.toString("utf-8"))
})



duplex.write("Hy My Name is shahzaib From Pakistan", "utf-8")