const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname +"-"+ Date.now()+ ".jpg");
    }
  })
}).single("user_file");

// creating route for uploading file
app.post("/uplaod", upload, (req, res) => {
  res.send("file uploaded");
});

app.listen(8000);
console.log("Server is running on the port::8000")
