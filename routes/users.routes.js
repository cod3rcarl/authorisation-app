const express = require("express");
const { getUsers, getUser, updateUser, addUser, deleteUser } = require("../controllers/users.controller");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

//router.use(protect);
//router.use(authorize("admin"));

router.route("/").get(getUsers);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
