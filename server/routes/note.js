const express = require("express");

const router = express.Router();
const noteController = require("../controllers/note");

// create
router.post("/", noteController.create);

// retrieve
router.get("/", noteController.retrieve);

// update (일부)
router.put("/", noteController.update);

// delete
router.delete("/", noteController.delete);

module.exports = router;
