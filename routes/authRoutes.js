const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/authController");

router.get("/users", getAllUsers);
router.put("/user/:id", editUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
