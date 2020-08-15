const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");

router.get("/join", (request, response) => {
  response.send("join!");
});

router.post("/join", (request, response) => {
  const { id, password, name } = request.body;
  // db에 데이터를 넣어보자
  userController.join();
  response.send("join!");
});

router.get("/login", (request, response) => {
  response.send("login!");
});

router.post("/login", (request, response) => {
  response.send("login!");
});

module.exports = router;
