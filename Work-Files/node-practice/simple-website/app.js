// const http = require("http");
// const fs = require("fs");


// const server = http.createServer();

// server.on("request", (req, res)=>{
    
//     if(req.url === "/" && req.method === "GET"){
//         console.log("pass")

//         res.setHeader("Content-Type" , "text/html")
//         const htmlFile = fs.createReadStream("./public/index.html")

//         htmlFile.pipe(res)
//     }

//     if(req.url === "/script.js" && req.method === "GET"){
//         console.log("pass")

//         res.setHeader("Content-Type" , "text/javascript")
//         const scriptFile = fs.createReadStream("./public/script.js")

//         scriptFile.pipe(res)
//     }
    

//     if(req.url === "/upload" && req.method === "GET"){
//         console.log("pass")

       
//         res.setHeader("Content-Type" , "text/json")
//         const htmlFile = fs.createReadStream("./public/compressing.html")

//         htmlFile.pipe(res)

       
//     }
// })


// server.listen(8000, ()=>console.log("http://localhost:8000"))

//---------------------------------
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve the HTML page
    const htmlPath = path.join(__dirname, "inde.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(htmlPath).pipe(res);

  } else if (req.url === "/download") {
    // Path to the file you want to send
    const filePath = path.join(__dirname, "jsam.txt");

    // Set headers to force download
    res.setHeader("Content-Disposition", "attachment; filename=jsam.txt");
    res.setHeader("Content-Type", "application/octet-stream");

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on("error", () => {
      res.writeHead(500);
      res.end("File not found or error reading file.");
    });

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
