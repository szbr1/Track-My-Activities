// i have to create an encrypte file 

// salt
// iv
// data
// check

// passowrd encrypt
const fs = require("fs");
const crypto = require("crypto");
const {pipeline} = require("stream");



const password = process.env.FT_PASS
const salt = crypto.randomBytes(16)
const iv = crypto.randomBytes(12)//recomended 96 bytes => 12

crypto.pbkdf2(password,salt,100_000, 32, "sha256", (err,key)=>{
  if(err) return;
  

  const fileRead = fs.createReadStream("./secret.txt");
  const output = fs.createWriteStream("./secret.enc");

  output.write(salt);
  output.write(iv)

  console.log(salt)
  console.log(iv)

  const cryptoiv = crypto.createCipheriv("aes-256-gcm", key, iv )

  pipeline(fileRead , cryptoiv, output, (err)=>{
    if(err) return console.log("piping error");
    const auth = cryptoiv.getAuthTag()
    console.log(auth.toString("hex"))
    fs.appendFileSync("./secret.enc",auth)

    console.log("✅ Data encrypted")
  })

  

})





