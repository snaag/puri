const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");

// user/join
router.post("/join", userController.join);

// user/login
router.post("/login", (request, response) => {
  response.send("login!");
});

module.exports = router;
