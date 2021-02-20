const express = require("express");
const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/users.controller");
const advancedResults = require("../middleware/advancedResults");
const User = require("../models/auth.model");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

//router.use(protect);
//router.use(authorize("admin"));

router.get("/", advancedResults(User), authorize("admin"), getUsers);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
