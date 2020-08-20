const express = require("express");

const router = express.Router();
const noteController = require("../controllers/note");

// create
router.post("/", noteController.create);

// retrieve
router.get("/", noteController.retrieve);

// update (일부)
router.patch("/", noteController.patch);

// delete
router.delete("/", noteController.delete);

module.exports = router;
