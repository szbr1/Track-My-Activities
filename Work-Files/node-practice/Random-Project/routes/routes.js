const express = require("express");
const { stat } = require("node:fs");
const fs = require("node:fs/promises");
const path = require("node:path");
const router = express.Router();

router.get("/", async (req, res) => {
  let fileHandle;
  try {
    fileHandle = await fs.open("./public/index.html", "r");
    const readStream = fileHandle.createReadStream();

    readStream.on("close", async () => {
      await fileHandle.close();
    });

    readStream.on("error", async (err) => {
      console.error(err);
      res.status(500).send("Error reading file.");
      if (fileHandle) await fileHandle.close();
    });

    readStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
    if (fileHandle) await fileHandle.close();
  }
});

router.get("/download", async (req, res) => {
    let fileHandle;
    try {
      const filePath = "./public/Grammar-George.pdf";
      // Get file statistics to find the size
      const fileStats = await fs.stat(filePath);
  
      res.setHeader("Content-Disposition", 'attachment; filename="Grammar-George.pdf"');
      res.setHeader("Content-Type", "text/pdf");
      res.setHeader("Content-Length", fileStats.size);
  
      fileHandle = await fs.open(filePath, "r");
      const fileStream = fileHandle.createReadStream();
  
      fileStream.on("close", async () => {
        await fileHandle.close();
      });
  
      fileStream.on("error", async (err) => {
        res.status(500).send("File not found or error reading file.");
        if (fileHandle) await fileHandle.close();
      });
  
      fileStream.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error.");
      if (fileHandle) await fileHandle.close();
    }
  });

module.exports = router;