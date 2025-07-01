const fs = require("fs");
const crypto = require("crypto");
const {pipeline} = require("stream");

//salt
//iv
//---
// auth

const fd = fs.openSync("./secret.enc", "r");
const fileSize = fs.fstatSync(fd).size;
console.log(fileSize)

const password = process.env.FT_PASS
const salt = Buffer.alloc(16);
const iv = Buffer.alloc(12);
const authCode = Buffer.alloc(16);

/**
 * First 16 bytes: Salt
 * Second 12 bytes: IV
 * Everything here: Ciphertext
 * Last 16 bytes: Message Authentication Code
 */

fs.readSync(fd, salt, 0, 16, 0);
fs.readSync(fd, iv, 0, 12, 16);
fs.readSync(fd, authCode, 0, 16, fileSize - 16);

crypto.pbkdf2(password, salt, 100_000, 32, "sha256", (err,key)=>{
    if(err)return;

    const cryptoconfirm = crypto.createDecipheriv("aes-256-gcm", key, iv)
    const writeStream = fs.createWriteStream("./decrypt.txt")

    
    // Set the MAC for verification
    cryptoconfirm.setAuthTag(authCode);
    

    const createread = fs.createReadStream("./secret.enc", {
        start: 28, // excluding the salt and IV
        end: fileSize - (16 + 1), // excluding the MAC
    })

    
   
    pipeline(createread , cryptoconfirm, writeStream, (err)=>{
        if(err) return console.log("pipeline mistake ")
            console.log("✅ Decrypt successfully")
    })
})

