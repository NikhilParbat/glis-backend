const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/authController");

router.get("/users", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
