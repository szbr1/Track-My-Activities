const zlib = require("zlib")

const input = 'Hello, World!';
zlib.gzip(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed:', buffer);
  }
});