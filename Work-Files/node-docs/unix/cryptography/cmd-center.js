const fs = require("fs");
const crypto = require("crypto");

//wiht this we create key with buffer in hex form using utf-8 format
const key = Buffer.from("92387blshldsljfe", "utf-8");// => it should always 16 bytes = 128 bits
//this will read and create readStream 
const readStream = fs.createReadStream("./color.txt");
//this will create a write stream 
const writeStream = fs.createWriteStream("./ms.txt");
//this will readFile only 
const cypherfile = fs.readFileSync("./color.txt");

//here i created hmac function so i can compare with this that the both hashes are correct 
const hmaccheckpoint = crypto
  .createHmac("sha256", key)
  .update(cypherfile)
  .digest("hex");
  // this value i copy from Checkpost by running console bcz i don't have any server where i can store this value
  // each time i run the checkost the hash will be diffrent 
  const expectedHmac = "8caf93812a54fcc330bb74d1e06766debd74d44c635ba078f665a0c0ab141fa7";
  console.log(hmaccheckpoint === expectedHmac ? "hash matches = true" : false)

// here i check does hashes match with each other if not so give error
if (hmaccheckpoint !== expectedHmac) {
  console.log("❌ Warning Data malicious shouln't open ")
}else{
    console.log("✅ You are safe ")
    const cryptoDec = crypto.createDecipheriv("aes-128-ecb", key, null);// if this is 128 so the key legnth should be 128 bits => 16 bytes
    
    readStream.pipe(cryptoDec).pipe(writeStream);
}
