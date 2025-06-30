const fs = require("fs");
const crypto = require("crypto");

const key = Buffer.from("92387blshldsljfe", "utf-8");

const readStream = fs.createReadStream("./color.txt");
const writeStream = fs.createWriteStream("./ms.txt");

const cryptoDec = crypto.createDecipheriv("aes-128-ecb", key, null);

readStream.pipe(cryptoDec).pipe(writeStream);
