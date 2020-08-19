const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");
const uploadController = require("../controllers/upload")
const { request, response } = require("express");

// user/join
router.post("/join", userController.join);

// user/logout
router.post("/logout", userController.logout);

// user/login
router.post("/login", (request, response) => {
  response.send("login!");
});

module.exports = router;
