const fs = require("node:fs/promises");
const http = require("http");
const zlib = require("zlib");

const server = http.createServer();

server.on("request", async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    try {
      const htmlfile = await fs.open("./public/index.html", "r");
      const htmlStream = htmlfile.createReadStream();

      // Create fresh gzip stream for every request
      const gzip = zlib.createGzip();

      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Encoding": "gzip",
      });

      htmlStream.pipe(gzip).pipe(res);
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end("Server Error");
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "404" }));
  }
});

server.listen(7990, () => console.log("http://localhost:7990"));
