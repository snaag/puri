const express = require("express");
const cors = require("cors");

const user = require("./routes/user");
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
