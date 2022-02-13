const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getAllPosts,
} = require("../controller/postControllers");

router.route("/").post(createPost);
router.route("/:id").put(updatePost);
router.route("/:id").delete(deletePost);
router.route("/:id/like").put(likePost);
router.route("/:id").get(getPost);
router.route("/timeline/all").get(getAllPosts);

module.exports = router;
