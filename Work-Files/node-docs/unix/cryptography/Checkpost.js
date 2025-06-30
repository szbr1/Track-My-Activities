const fs = require("fs");
const crypto = require("crypto");

const key = Buffer.from("92387blshldsljfe", "utf-8")
console.log(key.byteLength)
const filename = fs.createReadStream("./cheatsheet.txt",)
const writeStrem = fs.createWriteStream("./color.txt")

const realCrypto = crypto.createCipheriv("aes-128-ecb",  key, null)

filename.pipe(realCrypto).pipe(writeStrem)