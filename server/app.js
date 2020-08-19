const express = require("express");
const cors = require("cors");

//add
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
aws.config.loadFromPath(__dirname + "/config/awsconfig.json");
let s3 = new aws.S3();
const path = require("path");
//

const user = require("./routes/user");
const picture = require("./controllers/pictures");
const note = require("./routes/note");
const notes = require("./routes/notes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log("listen at ", PORT);
});

app.get("/", (request, response) => {
  response.send("hello world");
});

///사진업로드 => S3 => DB note => 사진 암호값 => Mathpix => 텍스트화 시키기

app.use("/user", user);
app.post("/result", picture.SendToMathpix);

app.use("/note", note);
app.use("/notes", notes);

//add
let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "purireviewnote",
    key: function(req, file, cb) {
      //username + date.now()
      let extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension);
    },
    acl: "public-read-write"
  })
});

let location = "";
let imgFile;
app.post("/upload", upload.single("file"), function(req, res, next) {
  imgFile = req.file;
  location = imgFile.location;
  res.json(imgFile);
});

// app.use("/upload", user)

app.get("/upload", function(req, res, next) {
  s3.listObjects(
    {
      Bucket: "purireviewnote"
    },
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      data.location = location;
      res.json(data);
    }
  );
});

app.post("/delete", function(req, res, next) {
  s3.deleteObject(
    {
      Bucket: "purireviewnote",
      Key: imgFile.key
    },
    (err, data) => {
      if (err) {
        return console.log(err);
      }
      res.end();
    }
  );
});
