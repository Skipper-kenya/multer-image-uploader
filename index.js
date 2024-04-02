const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("uploaded successfully");
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
