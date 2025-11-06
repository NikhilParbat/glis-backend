const express = require("express");
const router = express.Router();
const {
  getAllLands,
  addLand,
  getLandById,
} = require("../controllers/landController");

router.get("/", getAllLands);
router.post("/", addLand);
router.get("/:id", getLandById);

module.exports = router;
