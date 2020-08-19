const express = require("express");

const router = express.Router();
const notesController = require("../controllers/notes");

// 헤더에 있는 유저 아이디를 보고,
// 이에 해당하는 노트들을 가져옴
router.get("/", notesController.get);

module.exports = router;
