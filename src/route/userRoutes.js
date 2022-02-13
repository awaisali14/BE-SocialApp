const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
} = require("../controller/userController");
// router.route("/add-note").post();

router.route("/:id").put(updateUser);
router.route("/:id").get(getUser);
router.route("/:id/follow").put(followUser);
router.route("/:id/follow").put(unFollowUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
