const express = require("express");
const router = express.Router();
const { createPost } = require("../controller/postController");
const { createComment } = require("../controller/commentController");
const { likePost } = require("../controller/likeController");
const { getAllPost } = require("../controller/postController");
const { unlike } = require("../controller/likeController");

router.post("/create", createPost);
router.post("/createcomment", createComment);
router.post("/likepost", likePost);
router.get("/getallpost", getAllPost);
router.post("/unlike", unlike);

module.exports = router;
